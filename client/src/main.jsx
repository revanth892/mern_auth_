import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
<<<<<<< HEAD
  </React.StrictMode>,
)
=======
  </Provider>
);
>>>>>>> 77e46b4ceb3e7a164ffd817598a2246c9e5ec283
