import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';
import TwoPlayerBoard from './pages/TwoPlayerBoard'
import OnePlayerBoard from './pages/OnePlayerBoard';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rules from './pages/Rules';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/freeplay" element={<OnePlayerBoard />} />
                <Route path="/normalplay" element={<TwoPlayerBoard />} />
                <Route path="/rules" element={<Rules />} />
            </Routes>
        </Router>
    </Provider>,
    document.getElementById('root')
);
