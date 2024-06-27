import { shallow } from 'enzyme';
import App from './App';

// Renders the App without crashing
it('renders without crashing', () => {
  shallow(<App />);
})

// verify that App renders a div with the class App-header
it('renders a div with the class App-header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div.App-header').length).toEqual(1);
})

// verify that App renders a div with the class App-body
it('renders a div with the class App-body', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div.App-body').length).toEqual(1);
})

// verify that App renders a div with the class App-footer
it('renders a div with the class App-footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div.App-footer').length).toEqual(1);
})