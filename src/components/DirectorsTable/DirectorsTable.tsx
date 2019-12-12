import React, { FC, useState, SyntheticEvent, ChangeEvent } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import { DirectorType } from '../../interfaces/DirectorType';

import DirectorsDialog from '../DirectorsDialog/DirectorsDialog';
import DirectorsSearch from '../DirectorsSearch/DirectorsSearch';

import withHocs from './DirectorsTableHoc';

interface Props {
  classes?: any;
  data: {
    directors?: DirectorType[];
    fetchMore?: any;
  };
  onFormOpen: (directorData: DirectorType) => void;
}

interface ActiveDirectorState {
  nodeElement: null | Element;
  data?: null | DirectorType;
}

const DirectorsTable: FC<Props> = ({ classes, data = {}, onFormOpen }) => {
  const [state, setState] = useState<{ [x: string]: any }>({
    name: '',
  });

  const [activeDirector, setActiveDirector] = useState<ActiveDirectorState>({
    nodeElement: null,
    data: null,
  });

  const [isDialogOpened, setIsDialogOpened] = useState<boolean>(false);

  const { name } = state;

  const handleChange = (param: string) => (
    evt: ChangeEvent<HTMLInputElement>
  ) => setState({ [param]: evt.target.value });

  const handleSearch = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') {
      data.fetchMore({
        variables: { name },
        updateQuery: (_: any, { fetchMoreResult }: any) => fetchMoreResult,
      });
    }
  };

  const onDialogOpen = () => setIsDialogOpened(true);
  const onDialogClose = () => setIsDialogOpened(false);

  const onTooltipOpen = (
    { currentTarget }: SyntheticEvent,
    directorData: DirectorType
  ) => {
    setActiveDirector({
      nodeElement: currentTarget,
      data: directorData,
    });
  };

  const onTooltipClose = () =>
    setActiveDirector({ ...activeDirector, nodeElement: null });

  const onDirectorEdit = () => {
    if (activeDirector.data) {
      onFormOpen(activeDirector.data);
    }
    onTooltipClose();
  };

  const onDirectorDelete = () => {
    onDialogOpen();
    onTooltipClose();
  };

  const { directors = [] } = data;

  return (
    <>
      <Paper>
        <DirectorsSearch
          name={name}
          handleChange={handleChange}
          handleSearch={handleSearch}
        />
      </Paper>

      <DirectorsDialog
        isDialogOpened={isDialogOpened}
        onDialogClose={onDialogClose}
        id={activeDirector.data?.id}
      />

      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell>Movies</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {directors.map((director: DirectorType) => {
              return (
                <TableRow key={director.id}>
                  <TableCell component="th" scope="row">
                    {director.name}
                  </TableCell>
                  <TableCell align="right">{director.age}</TableCell>
                  <TableCell>
                    {director.movies?.map((movie, key) => (
                      <div key={movie.name}>
                        {`${key + 1}. `}
                        {movie.name}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell align="right">
                    <>
                      <IconButton
                        color="inherit"
                        onClick={(evt) => onTooltipOpen(evt, director)}
                      >
                        <MoreIcon />
                      </IconButton>
                      <Menu
                        id="simple-menu"
                        anchorEl={activeDirector?.nodeElement}
                        open={Boolean(activeDirector?.nodeElement)}
                        onClose={onTooltipClose}
                      >
                        <MenuItem onClick={onDirectorEdit}>
                          <CreateIcon /> Edit
                        </MenuItem>
                        <MenuItem onClick={onDirectorDelete}>
                          <DeleteIcon /> Delete
                        </MenuItem>
                      </Menu>
                    </>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default withHocs(DirectorsTable);
