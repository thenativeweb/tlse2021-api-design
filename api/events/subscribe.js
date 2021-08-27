'use strict';

const subscribe = function ({ eventPublisher }) {
  return function (req, res) {
    res.writeHead(200, {
      'content-type': 'application/x-ndjson'
    });
    res.write(`${JSON.stringify({ ping: 'pong' })}\n`);

    setInterval(() => {
      res.write(`${JSON.stringify({ ping: 'pong' })}\n`);
    }, 5_000);

    eventPublisher.on('event', ({ event }) => {
      res.write(`${JSON.stringify(event)}\n`);
    });
  };
};

module.exports = subscribe;
