import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SaveIcon from '@material-ui/icons/Save';

import { DirectorType } from '../../interfaces/DirectorType';

import withHocs from './DirectorsFormHoc';

interface Props {
  classes?: any;
  open: boolean;
  selectedValue: DirectorType;
  onFormClose: () => void;
  handleChange: (directorName: string) => any;
  addDirector: (director: DirectorType) => void;
  updateDirector: (director: DirectorType) => void;
}

const DirectorsForm: FC<Props> = ({
  classes,
  open,
  selectedValue: { id, name, age },
  onFormClose,
  handleChange,
  addDirector,
  updateDirector,
}) => {
  const handleSave = () => {
    if (id) {
      updateDirector({ id, name, age: Number(age) });
    } else {
      addDirector({ name, age: Number(age) });
    }

    onFormClose();
  };

  return (
    <Dialog
      onClose={onFormClose}
      open={open}
      aria-labelledby="simple-dialog-title"
    >
      <DialogTitle className={classes.title} id="simple-dialog-title">
        Director information
      </DialogTitle>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={name}
          onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-rate"
          label="Age"
          className={classes.textField}
          value={age}
          onChange={handleChange('age')}
          type="number"
          margin="normal"
          variant="outlined"
        />
        <div className={classes.wrapper}>
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <SaveIcon /> Save
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default withHocs(DirectorsForm);
