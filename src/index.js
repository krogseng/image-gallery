import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import GalleryApp from './GalleryApp';

const makeMeCentered = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '100vh',
};



ReactDOM.render(
  <div id='root'>
    < h1 > Welcome to the Gallery</h1 >
    <GalleryApp />
  </div >,
  document.getElementById('root')
);