import React from 'react'
import { Link } from 'react-router-dom'

import { PiWineFill } from 'react-icons/pi'

const Logo = () => {
    return (
        <h1 className="header__logo">
            <Link to="/">
                <em><PiWineFill /></em>
                <span>Rusuk Youtube</span>
            </Link>
        </h1>
    )
}

export default Logo