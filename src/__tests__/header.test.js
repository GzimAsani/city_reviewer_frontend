import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/City/City';

test('renders correctly', () => {
  const tree = create(<BrowserRouter><Nav /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
