const immer = require("immer");

module.exports = function createReducer(producers) {
  const reducer = immer.produce(function (draft, action) {
    const producer = producers[action.type];

    if (producer === undefined) {
      throw new Error(`Unknown action '${action.type}'.`);
    }

    producer(draft, action);
  });

  return reducer;
};
