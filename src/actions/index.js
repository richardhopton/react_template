export const TOGGLE_MESSAGE = "TOGGLE_MESSAGE";

export const toggleMessage = value => ({
  type: TOGGLE_MESSAGE,
  value: value
});

/*
export const FETCHED_ITEMS = "FETCHED_ITEMS";

const parseResponse = json => ({
  type: FETCHED_ITEMS,
  items: json.data.children.map(child => child.data),
  lastUpdated: Date.now()
});

export const exampleFetch = () => (dispatch, getState) => {
  const url = getState().url || "something";
  return fetch(`http://www.${url}.com`)
    .then(response => response.json())
    .then(json => dispatch(parseResponse(json)));
};
*/