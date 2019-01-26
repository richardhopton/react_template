import reducer from "../message";
import { TOGGLE_MESSAGE } from "../../actions";

describe("subreddit reducer", () => {
  it("should return default when called without known type", () => {
    expect(reducer(undefined, {})).toEqual({ state: 0 });
  });

  it("should handle TOGGLE_MESSAGE action", () => {
    expect(reducer(undefined, { type: TOGGLE_MESSAGE })).toEqual({
      state: 1
    });
  });
});
