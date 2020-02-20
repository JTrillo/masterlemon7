import * as React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

interface Props {}

export const MemberHead = (props: Props) => {
  const classes = useStyles(props);

  return(
    <TableHead>
      <TableRow>
        <TableCell className={classes.head}>Avatar</TableCell>
        <TableCell className={classes.head}>Id</TableCell>
        <TableCell className={classes.head}>Name</TableCell>
      </TableRow>
    </TableHead>
  );
}