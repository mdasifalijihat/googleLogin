import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <NavLink to={'/'}> Home  </NavLink>
            <NavLink to={'/'}> About  </NavLink>
            <NavLink to={'/login'}> Log In   </NavLink>
            <NavLink to={'/'}>  Register   </NavLink>
        </div>
    );
};

export default Navbar;