const createProducer = require("./index.js");

test("sets doh", () => {
  const reducer = createProducer({
    "set-doh": (draft, action) => {
      draft.doh = action.doh;
    },
  });

  const result = reducer({}, { type: "set-doh", doh: "hi" });
  expect(result).toStrictEqual({ doh: "hi" });
});
