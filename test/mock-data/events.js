var goodEventPostPayload = {
  'locations': [
    '17f28278-a4a8-416e-b7d2-b7c35155294d',
    'adffc8ef-4cc6-4d85-aa0d-5747d6d1f564'
  ],
  'name': 'Test Event',
  'description': 'Test description',
  'startTime': '2018-02-22T16:55:06.395Z',
  'endTime': '2018-03-01T16:55:06.397Z',
  'eventId': 0,
  'modificationType': 'add',
  'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc'
};

var goodEventPostResponse = {
  'message': 'Successfully created the event',
  'status': 'Success',
  'data': {
    'description': 'Test description',
    'endTime': '2018-03-01T16:55:06.397+0000',
    'eventId': 655,
    'modificationType': 'add',
    'name': 'Test Event',
    'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
    'startTime': '2018-02-22T16:55:06.395+0000',
    'locations': [
      'adffc8ef-4cc6-4d85-aa0d-5747d6d1f564',
      '17f28278-a4a8-416e-b7d2-b7c35155294d'
    ]
  },
  'pagination': null
};

var goodEventPutPayload = {
  'locations': [
    '17f28278-a4a8-416e-b7d2-b7c35155294d',
    '5d58fa63-d4a4-4b9b-8c2b-291f7a674ac9'
  ],
  'name': 'Test Event Update',
  'description': 'Test description update',
  'startTime': '2018-03-25T11:00:00.000Z',
  'endTime': '2018-05-17T01:00:00.000Z',
  'eventId': 655,
  'modificationType': 'add',
  'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc'
};

var goodEventPutResponse = {
  'message': 'Successfully updated the shift.', /* should be event not shift. API bug */
  'status': 'Success',
  'data': {
    'description': 'Test description update',
    'endTime': '2018-05-17T01:00:00.000+0000',
    'eventId': 655,
    'modificationType': 'add',
    'name': 'Test Event Update',
    'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
    'startTime': '2018-03-25T11:00:00.000+0000',
    'locations': [
      '5d58fa63-d4a4-4b9b-8c2b-291f7a674ac9',
      '17f28278-a4a8-416e-b7d2-b7c35155294d'
    ]
  },
  'pagination': null
};

var goodRowZeroAfterPost = {
  'locations': 'Chicago HQ, Waukesha HQ',
  'name': 'Test Event',
  'description': 'Test description',
  'startTime': 'February 22nd 2018, 10:55 am',
  'endTime': 'March 1st 2018, 10:55 am',
  'eventId': 655,
  'modificationType': 'add',
  'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
  'actions': '<div class="flex flex--row flex--center">'
  +'<px-icon class="u-ml++ edit-icon edit-icon-row-0" icon="px-utl:edit">'
  +'</px-icon><px-icon class="delete-icon delete-icon-row-0" icon="px-utl:delete">'
  +'</px-icon></div>'
};

var goodEventData = [{
  'description': 'Test Event 3',
  'endTime': '1970-01-01T07:43:47.000+0000',
  'eventId': 3,
  'modificationType': 'add',
  'name': 'Test Event 3',
  'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
  'startTime': '1970-01-01T07:43:47.000+0000',
  'locations': [
    '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
    '5e51ff98-70c6-4061-859f-4f1e790532fc',
    '17f28278-a4a8-416e-b7d2-b7c35155294d']
},
{'description': 'Really Long Event Name',
  'endTime': '1970-01-01T01:00:00.000+0000',
  'eventId': 4,
  'modificationType': 'add',
  'name': 'Really Long Event Name It Shouldnt Spill Over',
  'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
  'startTime': '1970-01-01T01:00:00.000+0000',
  'locations': [
    '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
    '5e51ff98-70c6-4061-859f-4f1e790532fc'
  ]
}];

var goodEventResponse = {
  'message': 'Successfully retrieved all events',
  'status': 'Success',
  'data': goodEventData,
  'pagination': null
};

var goodPostDecorateEventDataInOrder = [{'description': 'Really Long Event Name',
  'endTime': 'December 31st 1969, 7:00 pm',
  'eventId': 4,
  'modificationType': 'add',
  'name': 'Really Long Event Name It Shouldnt Spill Over',
  'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
  'startTime': 'December 31st 1969, 7:00 pm',
  'locations': [
    '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
    '5e51ff98-70c6-4061-859f-4f1e790532fc'
  ],
  'actions': '<div class="flex flex--row flex--center"><px-icon class="u-ml++ '
  +'edit-icon edit-icon-row-0" icon="px-utl:edit"></px-icon><px-icon '
  +'class="delete-icon delete-icon-row-0" icon="px-utl:delete"></px-icon></div>'
}, {
  'description': 'Test Event 3',
  'endTime': 'January 1st 1970, 1:43 am',
  'eventId': 3,
  'modificationType': 'add',
  'name': 'Test Event 3',
  'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
  'startTime': 'January 1st 1970, 1:43 am',
  'locations': [
    '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
    '5e51ff98-70c6-4061-859f-4f1e790532fc',
    '17f28278-a4a8-416e-b7d2-b7c35155294d'
  ],
  'actions': '<div class="flex flex--row flex--center">'+
  '<px-icon class="u-ml++ edit-icon edit-icon-row-1" icon="px-utl:edit">'
  +'</px-icon><px-icon class="delete-icon delete-icon-row-1" icon="px-utl:delete">'
  +'</px-icon></div>'
}];

var goodPostDecorateEventData = [{
  'description': 'Test Event 3',
  'endTime': 'January 1st 1970, 1:43 am',
  'eventId': 3,
  'modificationType': 'add',
  'name': 'Test Event 3',
  'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
  'startTime': 'January 1st 1970, 1:43 am',
  'locations': [
    '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
    '5e51ff98-70c6-4061-859f-4f1e790532fc',
    '17f28278-a4a8-416e-b7d2-b7c35155294d'
  ],
  'actions': '<div class="flex flex--row flex--center">'+
  '<px-icon class="u-ml++ edit-icon edit-icon-row-0" icon="px-utl:edit">'
  +'</px-icon><px-icon class="delete-icon delete-icon-row-0" icon="px-utl:delete">'
  +'</px-icon></div>'
}, {'description': 'Really Long Event Name',
  'endTime': 'December 31st 1969, 7:00 pm',
  'eventId': 4,
  'modificationType': 'add',
  'name': 'Really Long Event Name It Shouldnt Spill Over',
  'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
  'startTime': 'December 31st 1969, 7:00 pm',
  'locations': [
    '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
    '5e51ff98-70c6-4061-859f-4f1e790532fc'
  ],
  'actions': '<div class="flex flex--row flex--center"><px-icon class="u-ml++ '
  +'edit-icon edit-icon-row-1" icon="px-utl:edit"></px-icon><px-icon '
  +'class="delete-icon delete-icon-row-1" icon="px-utl:delete"></px-icon></div>'
}];

var goodPostLocationFetchEventData = [{
  'description': 'Test Event 3',
  'endTime': 'January 1st 1970, 1:43 am',
  'eventId': 3,
  'modificationType': 'add',
  'name': 'Test Event 3',
  'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
  'startTime': 'January 1st 1970, 1:43 am',
  'locations': ' Chicago HQ, Research Park Office, test 111',
  'actions': '<div class="flex flex--row flex--center">'
  +'<px-icon class="u-ml++ edit-icon edit-icon-row-0" icon="px-utl:edit">'
  +'</px-icon><px-icon class="delete-icon delete-icon-row-0" icon="px-utl:delete">'
  +'</px-icon></div>'
}, {'description': 'Really Long Event Name',
  'endTime': 'December 31st 1969, 7:00 pm',
  'eventId': 4,
  'modificationType': 'add',
  'name': 'Really Long Event Name It Shouldnt Spill Over',
  'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
  'startTime': 'December 31st 1969, 7:00 pm',
  'locations': ' Research Park Office, test 111',
  'actions': '<div class="flex flex--row flex--center"><px-icon class="u-ml++ '
  +'edit-icon edit-icon-row-1" icon="px-utl:edit"></px-icon><px-icon '
  +'class="delete-icon delete-icon-row-1" icon="px-utl:delete"></px-icon></div>'
}];
