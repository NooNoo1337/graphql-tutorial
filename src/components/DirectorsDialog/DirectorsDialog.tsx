import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BlockIcon from '@material-ui/icons/Block';

import withHocks from './DirectorsDialogHoc';

interface Props {
  isDialogOpened: boolean;
  id: string;
  onDialogClose: () => void;
  deleteDirector: (id: string) => void;
}

const DirectorsDialog: FC<Props> = ({
  isDialogOpened,
  id,
  onDialogClose,
  deleteDirector,
}) => {
  const handleDelete = () => {
    deleteDirector(id);
    onDialogClose();
  };

  return (
    <Dialog
      open={isDialogOpened}
      onClose={onDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sire that you want to delete element?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          If you click &apos;Confirm&lsquo; this element will be removed from
          data base.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogClose} color="primary">
          <BlockIcon /> Cancel
        </Button>
        <Button onClick={handleDelete} color="primary" autoFocus>
          <DeleteForeverIcon /> Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withHocks(DirectorsDialog);
