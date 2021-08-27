'use strict';

const { EventEmitter } = require('events');

class EventPublisher extends EventEmitter {
  publish ({ event }) {
    this.emit('event', { event });
  }
}

module.exports = EventPublisher;
