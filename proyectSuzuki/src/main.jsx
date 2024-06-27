import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/inter';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);
