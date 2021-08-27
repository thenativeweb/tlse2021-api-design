'use strict';

const { v4: uuid } = require('uuid');

const Event = require('../../elements/Event');

const jotDown = function ({ eventPublisher }) {
  return function (req, res) {
    const id = uuid();
    const { description } = req.body;

    const jottedDown = new Event({
      name: 'jotted-down',
      data: {
        id,
        description
      }
    });

    eventPublisher.publish({ event: jottedDown });

    res.status(200).end();
  };
};

module.exports = jotDown;
