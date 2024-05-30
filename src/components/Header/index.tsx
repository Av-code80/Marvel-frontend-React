import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import Search from '../Search';
import './index.scss';

const Header = ({ onSearch }) => {
  return (
    <header className='lumx-spacing-padding-big header'>
      <FlexBox vAlign={Alignment.center} hAlign={Alignment.spaceBetween}>
        <img src='logo512.png' alt='Marvel' className='header-logo' />
        <Search onSearch={onSearch} />
      </FlexBox>
    </header>
  );
};

export default Header;
