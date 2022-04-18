import React from 'react';
import './App.css';

function Menu(props) {
    const linksMenu = props.menu.map((m, index) => <li key={index}><a href='#'>{m}</a></li>)

    return (
        <ul className='menu'>
            {linksMenu}
        </ul>
    );
}

export default Menu;