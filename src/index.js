import 'assets/main.scss';
import React from 'react'
const createReactClass = require('create-react-class');
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Header from 'components/header';
import Sidebar from 'components/sidebar';

import Dashboard from 'pages/dashboard';
import Charts from 'pages/charts';

const App = () => (
    <Router>
        <div>

            <Header />
            <Sidebar />
            <hr />
            <div className="main__content">
                <Route path="/charts" exact component={Charts} />
                <Route path="/" exact component={Dashboard} />
            </div>
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('app'));

