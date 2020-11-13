import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe('App component', () => {
  it('There is About section', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h1').text();
    expect(text).toContain('About Me');
  });
});