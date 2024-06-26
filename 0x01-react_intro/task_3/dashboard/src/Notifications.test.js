import { shallow } from 'enzyme';
import Notifications from './Notifications';

// Renders the Notifications without crashing
it('renders without crashing', () => {
  shallow(<Notifications />);
})

// verify that Notifications renders three list items
it('renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('li').length).toEqual(3);
})

// verify that Notifications renders the text Here is the list of notifications
it('renders the text Here is the list of notifications', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
})