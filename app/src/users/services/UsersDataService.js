/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function UsersDataService($q) {
  var users = [
    {
      id: 'alexZava',
      name: 'Alex Zava',
      avatar: 'svg-1',
      obj: [
        {
          id: 'At 101',
          type: [
            'Faturamento', 'Técnico', 'Financeiro'
          ],
          name: [
            'Alex', 'Tiago', 'Hernane', 'Ignacio'
          ],
          chat: [
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
          ],
          newChat : ''
        },
        {
          id: 'At 102',
          type: [
            'Faturamento', 'Técnico', 'Financeiro'
          ],
          name: 'Alex Zava',
          chat: [
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
          ],
          newChat : ''
        }
      ]
    },
    {
      id: 'hernaneBim',
      name: 'Hernane Bim',
      avatar: 'svg-2',
      obj: [
        {
          id: 'At 101',
          type: [
            'Faturamento', 'Técnico', 'Financeiro'
          ],
          name: [
            'Alex', 'Tiago', 'Hernane', 'Ignacio'
          ],
          chat: [
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
          ],
          newChat : ''
        },
        {
          id: 'At 102',
          type: [
            'Faturamento', 'Técnico', 'Financeiro'
          ],
          name: 'Alex Zava',
          chat: [
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
          ],
          newChat : ''
        }
      ]
    },
    {
      id: 'tiagoBitencourt',
      name: 'Tiago Bitencourt',
      avatar: 'svg-3',
      obj: [
        {
          id: 'At 101',
          type: [
            'Faturamento', 'Técnico', 'Financeiro'
          ],
          name: [
            'Alex', 'Tiago', 'Hernane', 'Ignacio'
          ],
          chat: [
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
          ],
          newChat : ''
        },
        {
          id: 'At 102',
          type: [
            'Faturamento', 'Técnico', 'Financeiro'
          ],
          name: 'Alex Zava',
          chat: [
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
            {
              send: 'Ola',
              response: 'Ola, tudo bem?'
            },
          ],
          newChat : ''
        }
      ]
    }
  ];

  // Promise-based API
  return {
    loadAllUsers: function() {
      // Simulate async nature of real remote calls
      return $q.when(users);
    }
  };
}

export default ['$q', UsersDataService];

