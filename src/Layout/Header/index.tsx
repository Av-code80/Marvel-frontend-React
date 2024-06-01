import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import Search from '../../components/Search';


interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className='header' role='banner'>
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
