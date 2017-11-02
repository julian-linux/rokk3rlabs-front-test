import './styles.scss';

import React, { Component } from 'react';

import headerImg from 'assets/logo.png';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div>
                    <img src={headerImg} />
                </div>
                <div className="header__left">
                    <span>
                        Admin Name <i className="fa fa-address-book" aria-hidden="true"></i>
                    </span>
                </div>
            </header>
        )
    }
}

export default Header;
