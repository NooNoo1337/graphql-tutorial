import React, { FC, useState } from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { DirectorType } from '../../interfaces/DirectorType';

import DirectorsTable from '../DirectorsTable/DirectorsTable';
import DirectorsForm from '../DirectorsForm/DirectorsForm';

import withHocs from './DirectorsHoc';

interface Props {
  classes?: any;
}

const DEFAULT_DIRECTOR_STATE = {
  id: '',
  name: '',
  age: 0,
};

const Directors: FC<Props> = ({ classes }) => {
  const [director, setDirector] = useState<DirectorType>(
    DEFAULT_DIRECTOR_STATE
  );

  const [isFormOpened, setIsFormOpen] = useState<boolean>(false);

  const onFormOpen = (data?: DirectorType) => {
    setIsFormOpen(true);

    if (data) {
      setDirector({
        ...data,
      });
    }
  };

  const onFormClose = () => {
    setIsFormOpen(false);
    setDirector(DEFAULT_DIRECTOR_STATE);
  };

  const handleChange = (name: string) => ({
    target,
  }: {
    target: HTMLInputElement;
  }) => {
    setDirector({ ...director, [name]: target.value });
  };

  return (
    <>
      <DirectorsForm
        handleChange={handleChange}
        selectedValue={director}
        open={isFormOpened}
        onFormClose={onFormClose}
      />
      <div className={classes.wrapper}>
        <DirectorsTable onFormOpen={onFormOpen} />
        <Fab
          onClick={() => onFormOpen()}
          color="primary"
          aria-label="Add"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      </div>
    </>
  );
};

export default withHocs(Directors);
