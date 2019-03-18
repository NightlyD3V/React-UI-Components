import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import Logo from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <Logo />
            </div>
            <div className="text-container">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderContainer;