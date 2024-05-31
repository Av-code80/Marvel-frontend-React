import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import Search from '../../components/Search';
import './index.scss';

const Header = ({ onSearch }) => {
  return (
    <header className=' header'>
      <FlexBox vAlign={Alignment.spaceBetween}>
        <img
          src='/assets/marvel_logo.svg.png'
          alt='Marvel'
          className='header-logo'
        />
        <Search onSearch={onSearch} />
      </FlexBox>
    </header>
  );
};

export default Header;
