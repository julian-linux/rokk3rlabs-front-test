import React from 'react';
import _ from 'lodash';

import data from './data';

const box = props => (
    <div key={props.index} className="dashboard__box">
        <h3>{props.title}</h3>
        <img src={props.img} />
        <p>{props.text}</p>
    </div>
);

const boxes = () => _.times(2, index => box(_.set(data, 'index', index)));

const Dashboard = () => (
    <div className="dashboard__container">
        {boxes()}
    </div>
);

export default Dashboard;
