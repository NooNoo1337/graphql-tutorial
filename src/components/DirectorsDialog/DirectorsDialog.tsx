import React, { FC } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BlockIcon from '@material-ui/icons/Block';

import { DIRECTORS_QUERY } from '../DirectorsTable/queries';
import { DELETE_DIRECTOR_MUTATION } from './mutation';

import { DirectorType } from '../../interfaces/DirectorType';

interface Props {
  isDialogOpened: boolean;
  id: string | undefined;
  onDialogClose: () => void;
}

export const DirectorsDialog: FC<Props> = ({
  isDialogOpened,
  id,
  onDialogClose,
}) => {
  const [deleteDirector] = useMutation(DELETE_DIRECTOR_MUTATION, {
    update(cache, { data: { deleteDirector: deletedDirector } }) {
      const { directors }: any = cache.readQuery({
        query: DIRECTORS_QUERY,
        variables: { name: '' },
      });

      cache.writeQuery({
        query: DIRECTORS_QUERY,
        data: {
          directors: directors.filter(
            (director: DirectorType) => director.id !== deletedDirector.id
          ),
        },
        variables: { name: '' },
      });
    },
  });

  const handleDelete = () => {
    deleteDirector({ variables: { id } });
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
