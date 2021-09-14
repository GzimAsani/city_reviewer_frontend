import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import City from '../components/City/City'
configure({ adapter: new Adapter() });


it("renders Account header", () => {
  const wrapper = shallow(<City />);
  const welcome = <h2 className="main-h2">Welcome to the Ballkan Review app</h2>;
  expect(wrapper.contains(welcome)).toEqual(false);
});