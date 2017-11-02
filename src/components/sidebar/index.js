import './styles.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default () => (
    <div className="sidebar__content">
        <ul className="sidebar__links">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/charts">Charts</Link></li>
        </ul>
        <ul className="sidebar__hide_sidebar">
            <li>
                <a href="#">Close Menu</a>
            </li>
        </ul>
    </div>
)
