import { TOGGLE_MESSAGE } from "../actions";
import buildState from "./buildState";

export default (state = { state: 0 }, action) => {
  switch (action.type) {
    case TOGGLE_MESSAGE:
      return buildState(state, { state: ((state.state || 0) + 1) % 2 });
    default:
      return state;
  }
};
