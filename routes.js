const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Homepage';
    },
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return 'About Page';
    },
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    },
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      // /hello/lutfi
      const { name = 'stranger' } = request.params;

      // /hello?lang=id
      const { lang } = request.query;

      if (lang === 'id') {
        return `Hai, ${name}!`;
      }

      return `Hello, ${name}!`;
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      // dari json
      // { "username": "harrypotter", "password": "encryptedpassword" }
      const { username, password } = request.payload;
      return `Welcome ${username}`;
    },
  },
  {
    method: 'POST',
    path: '/user',
    handler: (request, h) => {
      // response toolkit
      return h
        .response('created')
        .type('text/plain')
        .header('X-Powered-By', 'Node Js')
        .code(201);

      // atau
      // const res = h.response('created');
      // res.type('created');
      // res.header('X-Powered-By', 'Node Js');
      // res.code(201);
      // return res;
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Halaman tidak dapat ditemukan';
    },
  },
];

module.exports = routes;
