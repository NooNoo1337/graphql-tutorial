import React, { FC, useState } from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import DirectorsTable from '../DirectorsTable/DirectorsTable';
import DirectorsForm from '../DirectorsForm/DirectorsForm';

import withHocs from './DirectorsHoc';

interface Props {
  classes?: any;
}

type DirectorsState =
  | {
      name: string;
      age: number;
      id: null;
    }
  | {
      [x: string]: string | number | boolean | null;
    };

const Directors: FC<Props> = ({ classes }) => {
  const DEFAULT_DIRECTORS_STATE = {
    name: '',
    age: 0,
    id: null,
  };
  const [directors, setDirectors] = useState<DirectorsState>(
    DEFAULT_DIRECTORS_STATE
  );

  const [isFormOpened, setIsFormOpen] = useState<boolean>(false);

  const onFormOpen = (data?: DirectorsState) => {
    setIsFormOpen(true);

    if (data) {
      setDirectors({
        ...data,
      });
    }

    console.log('data-->', data);
  };

  const onFormClose = () => {
    setIsFormOpen(false);
    setDirectors(DEFAULT_DIRECTORS_STATE);
  };

  const handleChange = (name: string) => ({
    target,
  }: {
    target: HTMLInputElement;
  }) => {
    setDirectors({ ...directors, [name]: target.value });
  };

  const { name, age, id } = directors;

  return (
    <>
      <DirectorsForm
        handleChange={handleChange}
        selectedValue={{ name, age, id }}
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
