import React, { useState, useEffect } from 'react';
import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleShowMenu = () => setShowMenu(!showMenu);

        window.addEventListener('menuToggle', handleShowMenu);

        return () => {
            window.removeEventListener('menuToggle', handleShowMenu);
        };
    }, [showMenu]);

    return (
        <header id='header' role='banner' className={showMenu ? 'show' : ''}>
            <Logo />
            <Menu />
            <Sns />
        </header>
    );
};

export default Header;
