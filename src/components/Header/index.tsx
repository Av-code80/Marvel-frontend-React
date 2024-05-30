import React, { useEffect } from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import Search from '../Search';
import { get } from '../../api';

const Header = () => {
  const getData = async () => {
    const response = await get('/characters');
    console.log(response, 'response');
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <header className='lumx-spacing-padding-big header'>
      <FlexBox vAlign={Alignment.right}>
        <img src='logo512.png' alt='Marvel' style={{ height: '50px' }} />
        <Search onSearch={function (query: string): void {
          throw new Error('Function not implemented.');
        } } />
      </FlexBox>
    </header>
  );
};

export default Header;
