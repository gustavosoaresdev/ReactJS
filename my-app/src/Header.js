import React from 'react';
import Menu from './Menu';
import './App.css';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <header className='header'>
                <h1>{this.props.title}</h1>
                <Menu menu={this.props.menu}></Menu>
            </header>
        );
    }

}

export default Header;