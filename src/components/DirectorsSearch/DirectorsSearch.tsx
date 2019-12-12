import React, { FC, SyntheticEvent } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import withHocs from './DirectorsSearchHoc';

interface Props {
  classes?: any;
  name: string;
  handleChange: (directorName: string) => any;
  handleSearch: (evt: SyntheticEvent) => void;
}

const DirectorsSearch: FC<Props> = ({
  classes,
  name,
  handleChange,
  handleSearch,
}) => {
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange={handleChange('name')}
        onKeyPress={(evt) => handleSearch(evt)}
        name={name}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
};

export default withHocs(DirectorsSearch);
