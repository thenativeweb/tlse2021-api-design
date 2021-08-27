'use strict';

const http = require('http');

const { flaschenpost } = require('flaschenpost');
const { processenv } = require('processenv');

const EventPublisher = require('./services/EventPublisher');
const getApi = require('./api/getApi');
const runProjections = require('./services/runProjections');
const ViewStore = require('./services/ViewStore');

const logger = flaschenpost.getLogger();

const eventPublisher = new EventPublisher();
const viewStore = new ViewStore();

runProjections({ eventPublisher, viewStore });

const api = getApi({ eventPublisher, viewStore });
const server = http.createServer(api);

const port = processenv('PORT', 3_000);

server.listen(port, () => {
  logger.info('Server started.', { port });
});
