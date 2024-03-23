import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Link to="/">
                <h1>푸터입니다.</h1>
            </Link>
        </footer>
    );
}

export default Footer;
