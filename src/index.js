import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers';
import Home from './Page/Home';
import NormalBoard from './Page/NormalBoard';
import FreePlayBoard from './Page/FreePlayBoard';
import Rules from './Page/Rules';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store} >
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/normal" element={<NormalBoard />} />
            <Route path="/free" element={<FreePlayBoard />} />
            <Route path="/rules" element={<Rules />} />

        </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);