import React from 'react';
import ReactDOM from 'react-dom';
//import Link from '../Link.react';
import App from './App';
import GalleryApp from './GalleryApp';
import renderer from 'react-test-renderer';


it('renders the app without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


