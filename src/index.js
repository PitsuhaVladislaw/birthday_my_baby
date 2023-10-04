import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './page/MainPage';
import Description from './page/Description/Description';
import { Gallery } from './page/Gallery/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MainPage />
    <Description />
    <Gallery />
  </React.StrictMode>
);
