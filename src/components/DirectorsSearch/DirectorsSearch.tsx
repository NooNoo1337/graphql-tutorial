import React, { FC, SyntheticEvent } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import withHocs from './DirectorsSearchHoc';

interface Props {
  classes?: any;
  name: string;
  onInputChange: (directorName: string) => any;
  onSearch: (evt: SyntheticEvent) => void;
}

const DirectorsSearch: FC<Props> = ({
  classes,
  name,
  onInputChange,
  onSearch,
}) => {
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange={onInputChange('name')}
        onKeyPress={(evt) => onSearch(evt)}
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
