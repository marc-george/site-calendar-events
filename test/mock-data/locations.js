var goodLocationData = [
  {
    'userIsSubscribed': false,
    'uri': '/locations/17f28278-a4a8-416e-b7d2-b7c35155294d',
    'type': 'location',
    'id': '17f28278-a4a8-416e-b7d2-b7c35155294d',
    'name': 'Chicago HQ',
    'description': 'Real HQ',
    'parent': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
    'parentName': 'The Brilliant Plant',
    'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
    'enterprise': 'GE_Healthcare',
    'timezone': null,
    'isUsaSite': null,
    'hashedTwilioKey': null,
    'hashedTwilioSid': null,
    'twilioNumber': null,
    'children': null,
    'createdBy': 'Andrew Severson',
    'lastUpdatedBy': 'Francois Taillandier',
    'lastUpdatedDate': 1495528366478,
    'lastUpdatedDateString': '23-May-2017',
    'archived': false,
    'isOpenable': true,
    'site': null,
    'parentLocation': {
      'userIsSubscribed': false,
      'uri': null,
      'type': null,
      'id': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
      'name': 'The Brilliant Plant',
      'description': null,
      'parent': null,
      'parentName': null,
      'siteId': null,
      'enterprise': null,
      'timezone': null,
      'isUsaSite': null,
      'hashedTwilioKey': null,
      'hashedTwilioSid': null,
      'twilioNumber': null,
      'children': null,
      'createdBy': null,
      'lastUpdatedBy': null,
      'lastUpdatedDate': null,
      'lastUpdatedDateString': 'N/A',
      'archived': null,
      'isOpenable': true,
      'site': null,
      'parentLocation': null
    }
  },
  {
    'userIsSubscribed': false,
    'uri': '/locations/4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
    'type': 'location',
    'id': '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
    'name': 'Research Park Office',
    'description': 'Office Building for Research Park',
    'parent': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
    'parentName': 'The Brilliant Plant',
    'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
    'enterprise': 'GE_Healthcare',
    'timezone': null,
    'isUsaSite': null,
    'hashedTwilioKey': null,
    'hashedTwilioSid': null,
    'twilioNumber': null,
    'children': [
      'edc68e20-8a54-4570-80be-080acd987a19',
      'ec6c715d-71b6-4c74-b9c8-790c7534bac0',
      'd37dcc56-a28e-4e00-b888-646077348925',
      '1912d053-fecb-4350-a975-a99d481b32aa',
      '05ed88e5-18ef-46bb-806b-6e348c8056f8',
      '02acaba8-a33d-4072-ba53-35b60abb68ff',
      'ce728ef7-4f35-434f-b36d-997b9a3341f3',
      '7696f11d-9c71-4332-bfba-249e7a797d6a',
      '5d58fa63-d4a4-4b9b-8c2b-291f7a674ac9',
      '6cc653cf-fed1-4c1b-b6e0-2d1e65729e45',
      'd0eb06fe-df7f-4401-ba5b-03febedfb198'
    ],
    'createdBy': 'Andrew Severson',
    'lastUpdatedBy': 'Andrew Severson',
    'lastUpdatedDate': 1484063466631,
    'lastUpdatedDateString': '10-Jan-2017',
    'archived': false,
    'isOpenable': true,
    'site': null,
    'parentLocation': null
  },
  {
    'userIsSubscribed': false,
    'uri': '/locations/5e51ff98-70c6-4061-859f-4f1e790532fc',
    'type': 'location',
    'id': '5e51ff98-70c6-4061-859f-4f1e790532fc',
    'name': 'test 111',
    'description': 'test111',
    'parent': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
    'parentName': 'The Brilliant Plant',
    'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
    'enterprise': 'GE_Healthcare',
    'timezone': null,
    'isUsaSite': null,
    'hashedTwilioKey': null,
    'hashedTwilioSid': null,
    'twilioNumber': null,
    'children': null,
    'createdBy': 'Andrew Severson',
    'lastUpdatedBy': 'Andrew Severson',
    'lastUpdatedDate': 1488475714840,
    'lastUpdatedDateString': '02-Mar-2017',
    'archived': false,
    'isOpenable': true,
    'site': {
      'userIsSubscribed': false,
      'uri': null,
      'type': 'site',
      'id': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
      'name': 'The Brilliant Plant',
      'description': 'This is the test Brilliant Plant',
      'parent': null,
      'parentName': null,
      'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
      'enterprise': 'GE_Healthcare',
      'timezone': null,
      'isUsaSite': null,
      'hashedTwilioKey': null,
      'hashedTwilioSid': null,
      'twilioNumber': null,
      'children': null,
      'createdBy': null,
      'lastUpdatedBy': null,
      'lastUpdatedDate': null,
      'lastUpdatedDateString': 'N/A',
      'archived': null,
      'isOpenable': true,
      'site': null,
      'parentLocation': null
    },
    'parentLocation': null
  }
];

var goodLocationResponse = {
  'status': 'Success',
  'message': 'Successfully retrieved all locations',
  'data': goodLocationData
};

var badLocationDataMissing = {
};

var badLocationDataEmpty = {
  'data': []
};

var goodLocationInfo = {'query':
'4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f'
+'|id=5e51ff98-70c6-4061-859f-4f1e790532fc'
+'|id=17f28278-a4a8-416e-b7d2-b7c35155294d',
  'map': new Map()
};

/* map locations to the event rows */
goodLocationInfo.map.set('4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f', [0, 1]);
goodLocationInfo.map.set('4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f', [0, 1]);
goodLocationInfo.map.set('5e51ff98-70c6-4061-859f-4f1e790532fc', [0, 1]);
goodLocationInfo.map.set('5e51ff98-70c6-4061-859f-4f1e790532fc', [0, 1]);
goodLocationInfo.map.set('17f28278-a4a8-416e-b7d2-b7c35155294d', [0]);

var goodSiteLocationsData = [
  {
    'userIsSubscribed': false,
    'uri': '/locations/00d1c7bf-3909-4e1b-a45c-48f152965e60',
    'type': 'location',
    'id': '00d1c7bf-3909-4e1b-a45c-48f152965e60',
    'name': 'twenty sixth room',
    'description': 'room',
    'parent': '5d58fa63-d4a4-4b9b-8c2b-291f7a674ac9',
    'parentName': '1st Floor',
    'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
    'enterprise': 'GE_Healthcare',
    'timezone': null,
    'isUsaSite': null,
    'hashedTwilioKey': null,
    'hashedTwilioSid': null,
    'twilioNumber': null,
    'children': null,
    'createdBy': 'Edgar Tello',
    'lastUpdatedBy': 'Edgar Tello',
    'lastUpdatedDate': 1507738284000,
    'lastUpdatedDateString': '11-Oct-2017',
    'archived': false,
    'isOpenable': true,
    'site': {
      'userIsSubscribed': false,
      'uri': null,
      'type': 'site',
      'id': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
      'name': 'The Brilliant Plant',
      'description': 'This is the test Brilliant Plant',
      'parent': null,
      'parentName': null,
      'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
      'enterprise': 'GE_Healthcare',
      'timezone': null,
      'isUsaSite': null,
      'hashedTwilioKey': null,
      'hashedTwilioSid': null,
      'twilioNumber': null,
      'children': null,
      'createdBy': null,
      'lastUpdatedBy': null,
      'lastUpdatedDate': null,
      'lastUpdatedDateString': 'N/A',
      'archived': null,
      'isOpenable': true,
      'site': null,
      'parentLocation': null
    },
    'parentLocation': {
      'userIsSubscribed': false,
      'uri': '/locations/5d58fa63-d4a4-4b9b-8c2b-291f7a674ac9',
      'type': 'location',
      'id': '5d58fa63-d4a4-4b9b-8c2b-291f7a674ac9',
      'name': '1st Floor',
      'description': null,
      'parent': '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
      'parentName': 'Research Park Office',
      'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
      'enterprise': 'GE_Healthcare',
      'timezone': null,
      'isUsaSite': null,
      'hashedTwilioKey': null,
      'hashedTwilioSid': null,
      'twilioNumber': null,
      'children': [
        '6cc653cf-fed1-4c1b-b6e0-2d1e65729e45',
        'd0eb06fe-df7f-4401-ba5b-03febedfb198',
        '87d1e94a-c3aa-486d-ab3d-2898b3a96b75',
        'bdf9a0f8-7be3-4a33-81ed-cd63052210f9',
        '1f461bf3-9816-44c5-9026-95461e069113',
        '4959afa4-e2eb-4537-8f92-51da371b539e',
        '201ba344-c087-4c7d-b2f7-69149f8736fd',
        '69bdbb5c-4ee3-4aff-abde-8090d2e1139f',
        'feb033c7-895e-42c2-98d5-7cbb5c1af98b',
        '802baff2-94e1-4b5b-9e29-79912de16850',
        'a9df0da0-5cf9-4b25-a691-d45b9f87f5c1',
        'd70c3b90-0d70-49ae-898a-aabf143d05e9',
        '7186cbac-e6e8-46e1-b50d-13b0b708c94f',
        'e28f01a0-11af-4815-9f10-7b35bb1c0c56',
        'ab00f8ce-ff2b-4d52-b0de-528ce537da6f',
        '804da457-a734-4a58-87e3-1a9ca15b457e',
        'df3348aa-4679-452a-a855-1777ed8e8584',
        '5ad2f331-7c32-4ca2-b869-bd1e46024359',
        '4e54972e-6146-42e4-923e-6786d29aba65'
      ],
      'createdBy': 'Andrew Severson',
      'lastUpdatedBy': 'Francois Taillandier',
      'lastUpdatedDate': 1490176515625,
      'lastUpdatedDateString': '22-Mar-2017',
      'archived': false,
      'isOpenable': true,
      'site': null,
      'parentLocation': {
        'userIsSubscribed': false,
        'uri': '/locations/4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
        'type': 'location',
        'id': '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
        'name': 'Research Park Office',
        'description': 'Office Building for Research Park',
        'parent': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
        'parentName': 'The Brilliant Plant',
        'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
        'enterprise': 'GE_Healthcare',
        'timezone': null,
        'isUsaSite': null,
        'hashedTwilioKey': null,
        'hashedTwilioSid': null,
        'twilioNumber': null,
        'children': [
          'edc68e20-8a54-4570-80be-080acd987a19',
          'ec6c715d-71b6-4c74-b9c8-790c7534bac0',
          'd37dcc56-a28e-4e00-b888-646077348925',
          '1912d053-fecb-4350-a975-a99d481b32aa',
          '05ed88e5-18ef-46bb-806b-6e348c8056f8',
          '02acaba8-a33d-4072-ba53-35b60abb68ff',
          'ce728ef7-4f35-434f-b36d-997b9a3341f3',
          '7696f11d-9c71-4332-bfba-249e7a797d6a'
        ],
        'createdBy': 'Andrew Severson',
        'lastUpdatedBy': 'Andrew Severson',
        'lastUpdatedDate': 1484063466631,
        'lastUpdatedDateString': '10-Jan-2017',
        'archived': false,
        'isOpenable': true,
        'site': null,
        'parentLocation': null
      }
    }
  },
  {
    'userIsSubscribed': false,
    'uri': '/locations/0131784f-a3cd-404b-816a-e4bef47d7f76',
    'type': 'location',
    'id': '0131784f-a3cd-404b-816a-e4bef47d7f76',
    'name': 'thirty second room',
    'description': 'room',
    'parent': '5d58fa63-d4a4-4b9b-8c2b-291f7a674ac9',
    'parentName': '1st Floor',
    'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
    'enterprise': 'GE_Healthcare',
    'timezone': null,
    'isUsaSite': null,
    'hashedTwilioKey': null,
    'hashedTwilioSid': null,
    'twilioNumber': null,
    'children': null,
    'createdBy': 'Edgar Tello',
    'lastUpdatedBy': 'Edgar Tello',
    'lastUpdatedDate': 1507738415641,
    'lastUpdatedDateString': '11-Oct-2017',
    'archived': false,
    'isOpenable': true,
    'site': {
      'userIsSubscribed': false,
      'uri': null,
      'type': 'site',
      'id': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
      'name': 'The Brilliant Plant',
      'description': 'This is the test Brilliant Plant',
      'parent': null,
      'parentName': null,
      'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
      'enterprise': 'GE_Healthcare',
      'timezone': null,
      'isUsaSite': null,
      'hashedTwilioKey': null,
      'hashedTwilioSid': null,
      'twilioNumber': null,
      'children': null,
      'createdBy': null,
      'lastUpdatedBy': null,
      'lastUpdatedDate': null,
      'lastUpdatedDateString': 'N/A',
      'archived': null,
      'isOpenable': true,
      'site': null,
      'parentLocation': null
    },
    'parentLocation': {
      'userIsSubscribed': false,
      'uri': '/locations/5d58fa63-d4a4-4b9b-8c2b-291f7a674ac9',
      'type': 'location',
      'id': '5d58fa63-d4a4-4b9b-8c2b-291f7a674ac9',
      'name': '1st Floor',
      'description': null,
      'parent': '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
      'parentName': 'Research Park Office',
      'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
      'enterprise': 'GE_Healthcare',
      'timezone': null,
      'isUsaSite': null,
      'hashedTwilioKey': null,
      'hashedTwilioSid': null,
      'twilioNumber': null,
      'children': [
        '6cc653cf-fed1-4c1b-b6e0-2d1e65729e45',
        'd0eb06fe-df7f-4401-ba5b-03febedfb198',
        '87d1e94a-c3aa-486d-ab3d-2898b3a96b75',
        'bdf9a0f8-7be3-4a33-81ed-cd63052210f9',
        '1f461bf3-9816-44c5-9026-95461e069113',
        '4959afa4-e2eb-4537-8f92-51da371b539e',
        '201ba344-c087-4c7d-b2f7-69149f8736fd',
        '69bdbb5c-4ee3-4aff-abde-8090d2e1139f',
        'feb033c7-895e-42c2-98d5-7cbb5c1af98b',
        '802baff2-94e1-4b5b-9e29-79912de16850',
        'a9df0da0-5cf9-4b25-a691-d45b9f87f5c1',
        'd70c3b90-0d70-49ae-898a-aabf143d05e9',
        '7186cbac-e6e8-46e1-b50d-13b0b708c94f',
        'e28f01a0-11af-4815-9f10-7b35bb1c0c56',
        'ab00f8ce-ff2b-4d52-b0de-528ce537da6f',
        '804da457-a734-4a58-87e3-1a9ca15b457e',
        'df3348aa-4679-452a-a855-1777ed8e8584',
        '5ad2f331-7c32-4ca2-b869-bd1e46024359',
        '4e54972e-6146-42e4-923e-6786d29aba65'
      ],
      'createdBy': 'Andrew Severson',
      'lastUpdatedBy': 'Francois Taillandier',
      'lastUpdatedDate': 1490176515625,
      'lastUpdatedDateString': '22-Mar-2017',
      'archived': false,
      'isOpenable': true,
      'site': null,
      'parentLocation': {
        'userIsSubscribed': false,
        'uri': '/locations/4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
        'type': 'location',
        'id': '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
        'name': 'Research Park Office',
        'description': 'Office Building for Research Park',
        'parent': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
        'parentName': 'The Brilliant Plant',
        'siteId': '4b9213de-75a4-49d2-9b31-77124fe84bdc',
        'enterprise': 'GE_Healthcare',
        'timezone': null,
        'isUsaSite': null,
        'hashedTwilioKey': null,
        'hashedTwilioSid': null,
        'twilioNumber': null,
        'children': [
          'edc68e20-8a54-4570-80be-080acd987a19',
          'ec6c715d-71b6-4c74-b9c8-790c7534bac0',
          'd37dcc56-a28e-4e00-b888-646077348925',
          '1912d053-fecb-4350-a975-a99d481b32aa',
          '05ed88e5-18ef-46bb-806b-6e348c8056f8',
          '02acaba8-a33d-4072-ba53-35b60abb68ff',
          'ce728ef7-4f35-434f-b36d-997b9a3341f3',
          '7696f11d-9c71-4332-bfba-249e7a797d6a'
        ],
        'createdBy': 'Andrew Severson',
        'lastUpdatedBy': 'Andrew Severson',
        'lastUpdatedDate': 1484063466631,
        'lastUpdatedDateString': '10-Jan-2017',
        'archived': false,
        'isOpenable': true,
        'site': null,
        'parentLocation': null
      }
    }
  }
];

var goodSiteLocationsResponse = {'status': 'Success',
  'message': 'Successfully retrieved all locations', 'data': goodSiteLocationsData};

var goodLocationDropDownData = [
  {
    'key': '17f28278-a4a8-416e-b7d2-b7c35155294d',
    'val': 'Chicago HQ'
  },
  {
    'key': '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
    'val': 'Research Park Office'
  },
  {
    'key': '5e51ff98-70c6-4061-859f-4f1e790532fc',
    'val': 'test 111'
  }
];

var goodLocationDropDownDataEditing = [
  {
    'key': '17f28278-a4a8-416e-b7d2-b7c35155294d',
    'val': 'Chicago HQ',
    'selected': 'true'
  },
  {
    'key': '4a92c8ee-d98d-40f6-bafb-f0d1d6c8481f',
    'val': 'Research Park Office',
    'selected': 'true'
  },
  {
    'key': '5e51ff98-70c6-4061-859f-4f1e790532fc',
    'val': 'test 111',
    'selected': 'true'
  }
];
