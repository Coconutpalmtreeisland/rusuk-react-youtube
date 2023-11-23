import React from 'react';
import { Link } from 'react-router-dom';
import { PiWineFill } from 'react-icons/pi';

const Logo = () => {
    const handleMenuToggle = () => {
        const event = new Event('menuToggle');
        window.dispatchEvent(event);
    };

    return (
        <h1 className="header__logo" onClick={handleMenuToggle}>
            <Link to="/">
                <em><PiWineFill /></em>
                <span>Rusuk Youtube</span>
            </Link>
        </h1>
    );
};

export default Logo;
