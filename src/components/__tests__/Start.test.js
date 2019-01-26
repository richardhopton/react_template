import React from "react";
import { Start } from "../Start";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { TOGGLE_MESSAGE } from "../../actions"; 

const dispatch = jest.fn();
  
// Check the component hasn't been accidentally adjusted by using a jest snapshot
test("Start renders expected default snapshot", () => {
  const {start} = <Start messageState={0} dispatch={dispatch} />;
  const tree = renderer.create(start).toJSON();
  expect(tree).toMatchSnapshot();

});

test("Start renders expected alternate snapshot", () => {
  const {start} = <Start messageState={1} dispatch={dispatch} />;
  const tree = renderer.create(start).toJSON();
  expect(tree).toMatchSnapshot();
});

// Check interactions
test("Start toggles on button click", () => {
  const start = shallow(<Start messageState={0} dispatch={dispatch} />);

  start.find("button").simulate("click", { preventDefault: () => {} });

  expect(dispatch).toHaveBeenCalledWith({type: TOGGLE_MESSAGE});
});
