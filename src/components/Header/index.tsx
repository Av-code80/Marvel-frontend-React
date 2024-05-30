import React, { useEffect } from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import Search from '../Search';

const Header = () => {
  return (
    <header className='lumx-spacing-padding-big header'>
      <FlexBox vAlign={Alignment.right}>
        <Search />
      </FlexBox>
    </header>
  );
};

export default Header;
