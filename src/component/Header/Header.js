import React from 'react';
import {  NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
const {user,logOut}=useAuth();
    return (
        <div>
            <nav className="bg-customColor3 flex flex-wrap justify-between  ">
                <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/home">Home Page</NavLink>
                <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/about">About Us</NavLink>
                <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/services">Services</NavLink>
                <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/register">Register</NavLink>
                {
                    user.email?
                    <button className="text-white text-2xl block font-semibold p-4 " onClick={logOut}>Log Out</button>:
                <NavLink activeStyle={{fontWeight:"bold",color:"black"}} className="text-white text-2xl block font-semibold p-4 " to="/sign">Log In</NavLink>

                }
                
            </nav>
        </div>
    );
};

export default Header;