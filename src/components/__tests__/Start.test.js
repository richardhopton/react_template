import React from "react";
import Start from "../Start";
import renderer from "react-test-renderer";

// Check the component hasn't been accidentally adjusted by using a jest snapshot
test("Start renders expected snapshot", () => {
  const tree = renderer.create(<Start />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Check interactions
const setup = () => {
  const push = jest.fn();
  const history = { push };
  const start = shallow(<Start history={history} />);

  return { push, start };
};
