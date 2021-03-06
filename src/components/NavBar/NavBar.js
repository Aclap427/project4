import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ?
        <div>

            <span>WELCOME, {props.user.name}</span>
            <Link to='/details' className='NavBar-link' onClick={props.handleAllStudents}>VIEW ALL</Link>
            <Link to='/add' className='NavBar-link' onClick={props.handleAddStudent}>ADD RECORD</Link>
            <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
        </div>
        :
        <div>
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
            <Link to='/' className='NavBar-link'>HOME</Link>
        </div>
        ;


    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;