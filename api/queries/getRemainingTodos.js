'use strict';

const getRemainingTodos = function ({ viewStore }) {
  return function (req, res) {
    res.json(viewStore.remainingTodos);
  };
};

module.exports = getRemainingTodos;
