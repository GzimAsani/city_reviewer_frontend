import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders Account header', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Display Active Users Account Details</h1>;
  expect(wrapper.contains(welcome)).toEqual(false);
});
