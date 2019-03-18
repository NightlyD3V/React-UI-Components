import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import Logo from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div>
            <Logo />
            <HeaderTitle />
            <HeaderContent />
        </div>
    );
}

export default HeaderContainer;