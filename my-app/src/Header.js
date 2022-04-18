import React from 'react';
import Menu from './Menu';
import './App.css';

function Header(props) {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Menu menu={props.menu}></Menu>
        </header>
    );
}

export default Header;