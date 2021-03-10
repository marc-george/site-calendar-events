(function () {
  'use strict';

  Polymer({

    is: 'site-calendar-events',

    properties: {

      siteId: {type: String, observer: '_siteIdChanged'
      },
      token: {type: 'String'},
      data: {type: 'Array'},
      locationApi: {type: 'String'},
      eventApi: {type: 'String'},
      modalHeader: {type: 'String', value: 'Add Event'},
      eventId: {type: 'Number', value: 0}
    },

    ready: function() {
      var _this = this;
      /* add listeners here so we can access the element functions with '_this' */
      this.addEventListener('click', function (event) {
        this._clickEvent(event, _this);
      });
      this.addEventListener('btnModalPositiveClicked', function (event) {
        this._modalSubmitted(_this);
      });
      this.addEventListener('btnModalNegativeClicked', function (event) {
        this._modalCanceled(_this);
      });
    },

    /**
     * Load new event and location data when a new site id is provided to the component.
     * @param {String} siteId site id
     * */
    _siteIdChanged: function(siteId) {
      /* Angular1 binding to Polymer attributes will cause the literal string to pass through first,
      i.e.  {{selectedSite.siteId}}, so must ensure siteId is valid before fetching data. */
      if(siteId !== '' && siteId !== null && siteId !== '{{selectedSite.siteId}}' ) {
        this.$.spinner.style.visibility = 'visible';
        this._populateEventTable(siteId);
        /* populate the modal dropwdown */
        this._fetchSiteLocations(siteId);
      }
    },

    /**
     * Fetch, decorate, and populate event data into the event table
     * @param {String} siteId site id
     * @return {Array} An array with the event -> location promise chain
     * */
    _populateEventTable: function(siteId) {
      var eventService = this.$.eventService;
      var locationService = this.$.locationService;
      var _this = this;
      var promises = [];

      promises.push(eventService.getEventsBySiteId(siteId));
      promises[0].then(function (response) {
        if(response && response.data && response.data.length > 0) {
          var tableData = response.data;

          _this._decorateTableData(tableData);

          /* create a location query string and a location id to row number(s) map.
          This allows for a single location service GET request and a single
          table data assignment, reducing latency and html redraw glitching.
          The map preserves event row to location association since the GET request
          does not return in a specific order.*/
          var locationInfo = _this._buildLocationInfo(tableData);

          /* locationInfo example: see test/mock-data */
          /* edge case if none of the events have locations to avoid a 400 */
          if(locationInfo.map.size === 0) {
            locationInfo.query='-1';
          }
          /* fetch the locations for all events */
          promises.push(locationService.getLocation(locationInfo.query));
          promises[1].then(function (response) {
            _this._handleLocations(response, locationInfo, tableData);
            _this.set('data', tableData);
            _this.$.spinner.style.visibility = 'hidden';
          })
          .catch(function (error) {
            _this.$.spinner.style.visibility = 'hidden';

            var message = 'Failed to retrieve location information. '
            + 'Please contact your system administrator.';

            _this._createAlertMessage('important', 'Error', message, 15000);
          });
        } else{
          _this.set('data', []);
          _this.$.spinner.style.visibility = 'hidden';
        }
      })
      .catch(function (error) {
        _this.$.spinner.style.visibility = 'hidden';

        var message = 'Failed to retrieve event information. '
        +'Please contact your system administrator.';

        _this._createAlertMessage('important', 'Error', message, 15000);
      });

      return promises;
    },

    /**
     * Get all locations that are associated to a site
     * @param {String} siteId site id
     * @return {Promise} a promise with location data
     * */
    _fetchSiteLocations: function(siteId) {
      var locationService = this.$.locationService;
      var promise = locationService.getLocationsBySiteId(siteId);
      var _this = this;

      promise.then(function(response) {
        if(response && response.data && response.data.length > 0) {
          /* format for dropdown */
          var dropDownData = [];
          response.data.forEach(function(obj) {
            dropDownData.push({key: obj.id, val: obj.name});
          });
          /* assigning sort mode here b/c when assigned in html it causes a
          display issue in px-tabs */
          _this.$.eventLocations.sortMode='val';
          _this.siteLocations = dropDownData;
        }
      });
      return promise;
    },

    /**
     * Clear the event modal attributes when the event modal cancel button is clicked
     * @param {Object} _this a reference to this element
     * */
    _modalCanceled: function(_this) {
      _this._clearModal();
    },

    /**
     * Preps event payload and determines whether it is an add or an edit
     * @param {String} _this a reference to this element
     * @return {Promise} a promise with results from the event add or event edit activity
     * */
    _modalSubmitted: function(_this) {
      _this.$.eventLocations.selectBy = 'key';
      var selectedLocationIds = _this.$.eventLocations.selectedValues;

      var body = {
        locations: selectedLocationIds,
        name: _this.$.eventName.value,
        description: _this.$.eventDescr.value,
        startTime: _this.$.toFrom.range.from,
        endTime: _this.$.toFrom.range.to,
        eventId: (_this.eventId > 0) ? _this.eventId : 0,
        modificationType: 'remove',
        siteId: _this.siteId
      };

      if( _this.modalHeader === 'Add Event') {
        _this.$.eventLocations.selectBy = 'val';
        var selectedLocationNames = _this.$.eventLocations.selectedValues;
        /* reset selectBy now. it fixes a bug where updating right after
        adding an event wont recognize removed locations */
        _this.$.eventLocations.selectBy = 'key';
        return _this._addEvent(selectedLocationNames, body);
      } else if (_this.modalHeader === 'Edit Event') {
        return _this._editEvent(body, _this);
      }

      _this.$.spinner.style.visibility = 'visible';
    },

    /**
     * Adds an event via the event service to the database, and adds that event locally to row 0
     * @param {Array} locationNames the location names to be added locally
     * @param {Object} body the add event payload
     * @return {Promise} the results of the add action
     * */
    _addEvent: function(locationNames, body) {
      var _this = this;
      var service = _this.$.eventService;
      var promise = service.createEvent(body, _this.siteId);

      promise.then(function(response) {
        _this.$.spinner.style.visibility = 'hidden';
        _this._clearModal();
        /* create copy of data (rather than a pointer to it) */
        var newData = JSON.parse(JSON.stringify(_this.data));
        /* alter body from API payload to object for the first row of the table */
        var locationNamesString = locationNames.join(', ');
        body.locations = locationNamesString;
        body.eventId = response.data.eventId;
        newData.unshift(body);
        _this._decorateTableData(newData);
        /* clear and set the data (polymer hack. shouldn't have to clear first) */
        _this.set('data', []);
        _this.set('data', newData);
      })
      .catch(function(err) {
        _this.$.spinner.style.visibility = 'hidden';
        var message = 'Error adding the event. Please try again in a few minutes';
        _this._createAlertMessage('important', 'Error', message, 15000);
      });

      return promise;
    },

    /**
     * Edits an event in the database via the event service and reloads the table
     * @param {Object} body the update event payload
     * @return {Promise} the results of the edit
     * */
    _editEvent: function(body) {
      var _this = this;
      var service = _this.$.eventService;
      var promise = service.updateEvent(_this.eventId, body);

      promise.then(function(response) {
        _this.$.spinner.style.visibility = 'hidden';
        _this._clearModal();
        _this._populateEventTable(_this.siteId);
      })
      .catch(function(err) {
        _this.$.spinner.style.visibility = 'hidden';
        var message = 'Error updating the event. Please try again in a few minutes';
        _this._createAlertMessage('important', 'Error', message, 15000);
      });

      return promise;
    },

    /**
     * Clears the modal attributes
     * */
    _clearModal: function() {
      this.set('modalHeader', 'Add Event');
      this.$.eventName.value = '';
      this.$.eventDescr.value = '';
      this.$.eventLocations.items = [];
      this._fetchSiteLocations(this.siteId);
      this.eventId = 0;
    },

    /**
     * Sorts the rows, adds actions, and formats dates for the event data
     * @param {Array} data event data objects
     * */
    _decorateTableData: function(data) {
      /* sort by earliest startTime first */
      data.sort(function(a, b) {
        var c = new Date(a.startTime);
        var d = new Date(b.startTime);
        return c-d;
      });

      for (var i = 0; i < data.length; i++) {
        /* add action icons */
        data[i].actions = '<div class="flex flex--row flex--center">'
        + '<px-icon class="u-ml++ edit-icon edit-icon-row-'
        + i + '" icon="px-utl:edit"></px-icon>'
        + '<px-icon class="delete-icon delete-icon-row-'+ i
        +'" icon="px-utl:delete"></px-icon></div>';

        var validDate = 'MMMM Do YYYY, h:mm a';
        var startVerify = moment(data[i].startTime, validDate, true);
        var endVerify = moment(data[i].endTime, validDate, true);

        /* format the raw date fields with moment */
        if(!startVerify.isValid()) {
          data[i].startTime = moment(data[i].startTime).format('MMMM Do YYYY, h:mm a');
        }
        if(!endVerify.isValid()) {
          data[i].endTime = moment(data[i].endTime).format('MMMM Do YYYY, h:mm a');
        }
      }
    },

    /**
     * Creates the location object used in the event location request
     * @param {Array} events event data objects
     * @return {Object} the event location consolidated fetch query and row mapping
     * */
    _buildLocationInfo: function(events) {
      var info = {
        query: '',
        map: new Map()
      };

      /* loop through all event locations and map location ids to row number(s). */
      for (var i=0; i < events.length; i++) {
        for (var j=0; j < events[i].locations.length; j++) {
          var currentVal = info.map.get(events[i].locations[j]);
          if(currentVal !== undefined) {
            currentVal.push(i);
          } else{
            info.map.set(events[i].locations[j], [i]);
          }
        }
      }

      /* use the map, now with a unique list of ids (no duplicates), to form the query string */
      info.map.forEach(function(value, key, map) {
        info.query += key + '|id=';
      });
      info.query = info.query.slice(0, -4); /* remove trailing |id= */
      return info;
    },

    /**
     * Converts location ids in the event table column to location names
     * @param {Array} locations location objects
     * @param {Object} info location info object with consolidated fetch query and row mapping
     * @param {Array} events event table data objects
     * */
    _handleLocations: function(locations, info, events) {
      /*  For each location returned from the query:
      1) get the event row from the location map
      2) remove the location id from the locations column
      3) add the location name to the locations column
      4) re-sort the column alphabetically
      5) convert each locations array to strings (so px-data-table handles properly) */
      if(locations.data !== undefined && locations.data.length !== 0 ) {
        for (var i = 0; i < locations.data.length; i++) {
          var newLocations = [];

          var location = locations.data[i];
          var rows = info.map.get(location.id);

          if (rows !== undefined) {
            for (var j = 0; j < rows.length; j++) {
              var locationColumn = events[rows[j]].locations;
              var index = locationColumn.indexOf(location.id);
              locationColumn.splice(index, 1);
              locationColumn.push(' ' + location.name);
              locationColumn.sort();
            }
          }
        }
        for (i = 0; i < events.length; i++) {
          events[i].locations=events[i].locations.toString();
        }
      } else{
        var err = new Error('Location data curropted or empty');
        return err;
      }
    },

    /**
     * Pops up a user alert message box
     * @param {String} type type of alert
     * @param {String} title title of alert
     * @param {String} message alert message
     * @param {Number} autoDismiss seconds until alert is automatically dismissed
     * */
    _createAlertMessage: function(type, title, message, autoDismiss) {
      var alertMessage = document.createElement('px-alert-message');
      alertMessage.hideSeverity='true';
      alertMessage.type=type;
      alertMessage.action='dismiss';
      alertMessage.messageTitle=title;
      alertMessage.message=message;
      alertMessage.expanded='true';
      alertMessage.autoDismiss=autoDismiss;
      this.$.alertMessageContainer.appendChild(alertMessage);
    },

    /**
     * Determines if a user click is on an edit or delete icon
     * @param {Object} e the click event object
     * @param {Object} _this a reference to this element
     * @param {String} message alert message
     * @param {Number} autoDismiss seconds until alert is automatically dismissed
     * */
    _clickEvent: function(e, _this) {
      /* determine if edit or delete icon clicked by checking classes in the event path */
      var classes = e.path[1].classList;
      for (var i = 0; i < classes.length; i++) {
        var editIndexOf = classes[i].indexOf('edit-icon-row');
        var deleteIndexOf = classes[i].indexOf('delete-icon-row');
        if(editIndexOf !== undefined && editIndexOf > -1) {
          let match = /edit-icon-row-(\d*)/.exec(classes[i]);
          if(match[1] !== undefined && match[1] !== null) {
            _this._editIconClicked(match[1]);
          }
        } else if(deleteIndexOf !== undefined && deleteIndexOf > -1) {
          let match = /delete-icon-row-(\d*)/.exec(classes[i]);
          if(match[1] !== undefined && match[1] !== null) {
            _this._deleteIconClicked(match[1]);
          }
        }
      }
    },

    /**
     * Displays modal and populates modal attributes for editing an event
     * @param {String} row the row number of the event whose edit icon was clicked
     * */
    _editIconClicked(row) {
      var convertedStart = moment(this.data[row].startTime, 'MMMM Do YYYY, h:mm a')
      .format();

      var convertedEnd = moment(this.data[row].endTime, 'MMMM Do YYYY, h:mm a')
      .format();

      this.modalHeader = 'Edit Event';
      this.$.addEditModal.modalButtonClicked();
      this.$.eventName.value = this.data[row].name;
      this.$.eventDescr.value = this.data[row].description;
      this.eventId = this.data[row].eventId;
      this.$.toFrom.range={from: convertedStart, to: convertedEnd};
      var locationDropDowns = this.$.eventLocations.items;

      /* Populate location drop down with current events selected list */
      var locationNameArray = this.data[row].locations.trim().split(', ');

      locationDropDowns.forEach(function(obj) {
        /* clear out old selections, assign new ones */
        obj.selected = 'false';
        if(locationNameArray.includes(obj.val)) {
          obj.selected = 'true';
        }
      });

      this.$.eventLocations.items = [];
      this.$.eventLocations.items = locationDropDowns;
    },

    /**
     * Deletes an event
     * @param {String} row the row number of the event whose delete icon was clicked
     * */
    _deleteIconClicked(row) {
      var eventId = this.data[row].eventId;
      var eventService = this.$.eventService;
      var promise = eventService.deleteEvent(eventId);
      var _this = this;

      this.$.spinner.style.visibility = 'visible';

      promise.then(function(response) {
        _this._populateEventTable(_this.siteId);
      })
      .catch(function(err) {
        _this.$.spinner.style.visibility = 'hidden';
        var message = 'Error deleting the event. Please try again in a few minutes';
        _this._createAlertMessage('important', 'Error', message, 15000);
      });
      return promise;
    }

  }); /* close polymer */
}()); /* close function wrapper */
