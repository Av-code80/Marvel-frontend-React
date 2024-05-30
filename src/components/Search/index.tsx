import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

const Search = () => (
  <TextField
    theme={Theme.dark}
    placeholder="Search ..."
    icon={mdiMagnify}
    onChange={() => {}}
  />
);

export default Search;
