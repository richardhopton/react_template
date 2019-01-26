import * as actions from "../index";

test("toggleMessage action should produce expected result", () => {
  const action = actions.toggleMessage("something");

  const expected = { type: actions.TOGGLE_MESSAGE, value: "something" };
  expect(action).toEqual(expected);
});

/*
describe("exampleFetch action", () => {
  const getState = () => ({ url: "something_else" });

  it("should fetch from expected url", () => {
    const action = actions.exampleFetch();
    fetch.mockResponse(
      JSON.stringify({ data: { children: [{ data: "1" }, { data: "2" }] } })
    );

    action(arg => arg(() => {}), getState);
    expect(fetch).toHaveBeenCalledWith("http://www.something_else.com");
  });

  it("should produce expected dispatch given mock data", () => {
    const action = actions.exampleFetch();
    const dispatch = jest.fn();
    fetch.mockResponse(
      JSON.stringify({ data: { children: [{ data: "1" }, { data: "2" }] } })
    );

    action(arg => arg(dispatch), getState).then(() => {
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          items: ["1", "2"],
          type: actions.FETCHED_ITEMS
        })
      );
    });
  });
});
*/
