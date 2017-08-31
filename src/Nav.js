import React from 'react';

import NavLogo from './NavLogo.js';
import NavItem from './NavItem.js';
import NavDropdown from './NavDropdown.js';
import MenuItem from './MenuItem.js';
import NavCollapse from './NavCollapse.js';

const Nav = (
    <div className="nav">
        <NavLogo image="./logo.svg"/>
        <NavCollapse>
            <NavItem link="#" title="Link 1"/>
            <NavItem link="#" title="Link 2"/>
            <NavDropdown link="#" title="Link 3">
                <MenuItem link="#" title="Item 1"/>
                <MenuItem link="#" title="Item 2"/>
                <MenuItem link="#" title="Item 3"/>
            </NavDropdown>
        </NavCollapse>
    </div>
);

export default Nav;