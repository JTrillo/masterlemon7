import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => ({
  leftColumnCell: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

interface Props {
  company: string;
  email: string;
  public_repos: number;
  followers: number;
  following: number;
}

export const MemberCardTable = (props: Props) => {
  const { company, email, public_repos, followers, following} = props;
  const classes = useStyles(props);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableBody>
          <TableRow>
            <TableCell className={classes.leftColumnCell}>Company</TableCell>
            <TableCell>{company}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.leftColumnCell}>Email</TableCell>
            <TableCell>{email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.leftColumnCell}>Public repos</TableCell>
            <TableCell>{public_repos}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.leftColumnCell}>Followers</TableCell>
            <TableCell>{followers}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.leftColumnCell}>Following</TableCell>
            <TableCell>{following}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}