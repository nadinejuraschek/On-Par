import React from 'react';
import logo from '../images/embrace.svg';

const Navbar = () => {
    return (
        <nav className="ui huge top fixed menu">
            <a className="header item" href="/">
                <img alt="App Logo" src={logo} width="112" height="28" />
                Au Pair App
            </a>

            <div className="right menu">
                <div className="ui simple dropdown item">
                    <i className="user large circle icon"></i>
                    <i className="dropdown icon"></i>
                    <div className="menu">
                        <a className="item" href="/profile">Profile</a>
                        <a className="item" href="/emergencynumbers">Emergency Numbers</a>
                        <a className="item" href="/api/user/signout">Log Out</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;