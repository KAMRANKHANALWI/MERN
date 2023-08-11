import React, { useState } from "react";
import {Link} from 'react-router-dom';

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import './MainNavigation.css';

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    return (
        <>
            {drawerIsOpen ? (<SideDrawer>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>) : null }
            <MainHeader>
                <button className="main-navigation__menu-btn">
                    <sapn />
                    <sapn />
                    <sapn />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">YourPlaces</Link> 
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>

            </MainHeader>
        </>
)};

export default MainNavigation;

