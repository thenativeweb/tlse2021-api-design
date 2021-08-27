'use strict';

const { flaschenpost } = require('flaschenpost');

const logger = flaschenpost.getLogger();

const runProjections = function ({ eventPublisher, viewStore }) {
  eventPublisher.on('event', ({ event }) => {
    switch (event.name) {
      case 'jotted-down': {
        viewStore.remainingTodos.push({
          id: event.data.id,
          description: event.data.description
        });

        /* eslint-disable no-param-reassign */
        if (viewStore.statistics.jottedDownCounter === undefined) {
          viewStore.statistics.jottedDownCounter = 0;
        }
        viewStore.statistics.jottedDownCounter += 1;
        /* eslint-enable no-param-reassign */

        break;
      }
      default: {
        logger.warn('Unprojectioned event detected.', { event });
      }
    }
  });
};

module.exports = runProjections;
