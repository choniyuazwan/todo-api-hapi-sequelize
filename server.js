const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

const routes = require('./routes');
server.route(routes);

server.log(['test', 'error'], 'Test event');

const init = async () => {

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();