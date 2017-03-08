import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'enzyme';


it('renders the app without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('consistently renders from List Image button', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
