import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import EnterPageTest from "../EnterPageTest";

Enzyme.configure({ adapter: new Adapter() });

test("should first", () => {
  const wrapper = shallow(<EnterPageTest />);
  expect(wrapper.find("#qnty_1").text()).toBe(0);
});
