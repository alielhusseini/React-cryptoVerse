import React from 'react';
import { render } from 'react-dom';
import App from './App';
// redux toolkit
import { Provider } from 'react-redux';
import store from './app/store'

import 'antd/dist/antd.css'

render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
