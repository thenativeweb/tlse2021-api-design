'use strict';

const { v4: uuid } = require('uuid');

class Event {
  constructor ({ name, data }) {
    this.id = uuid();
    this.name = name;
    this.data = data;
  }
}

module.exports = Event;
