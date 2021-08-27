'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const getRemainingTodos = require('./queries/getRemainingTodos');
const getStatistics = require('./queries/getStatistics');
const jotDown = require('./commands/jotDown');
const subscribe = require('./events/subscribe');

const getApi = function ({ eventPublisher, viewStore }) {
  const api = express();

  api.use(cors());
  api.use(bodyParser.json());

  // Commands => GraphQL Mutations
  api.post('/commands/jot-down', jotDown({ eventPublisher }));

  // Queries => GraphQL Queries
  api.get('/queries/remaining-todos', getRemainingTodos({ viewStore }));
  api.get('/queries/statistics', getStatistics({ viewStore }));

  // Events => GraphQL Subscriptions
  api.get('/events', subscribe({ eventPublisher }));

  return api;
};

module.exports = getApi;
