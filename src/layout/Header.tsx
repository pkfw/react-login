import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>헤더입니다.</h1>
            </Link>
        </header>
    );
}

export default Header;
