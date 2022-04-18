import React from 'react';
import './App.css';

function Menu(props) {
    const linksMenu = props.links.map(l => <li><a href='#'>{l}</a></li>)

    return (
        <ul className='menu'>
            {linksMenu}
        </ul>
    );
}

export default Menu;