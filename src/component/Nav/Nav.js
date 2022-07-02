import React from 'react';
import { NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <NavLink to="home">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="users">Users</NavLink>
        </div>
    );
};

export default Nav;