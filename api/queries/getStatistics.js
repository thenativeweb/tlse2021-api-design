'use strict';

const getStatistics = function ({ viewStore }) {
  return function (req, res) {
    res.json(viewStore.statistics);
  };
};

module.exports = getStatistics;
