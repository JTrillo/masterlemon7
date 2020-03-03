import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { MemberEntity } from '../../../model';
import { MemberRowComponent } from './member-row.component';
import { MemberFooterComponent } from "./member-footer.component";

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    minWidth: 650,
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

interface Props {
  members: MemberEntity[];
  page: number;
  onChangePage: (page: number) => void;
  rowsPerPage: number;
  onChangeRowsPerPage: (rowsPerPage: number) => void;
}

export const MemberTableComponent = (props: Props) => {
  const { members } = props;
  const { page, onChangePage, rowsPerPage, onChangeRowsPerPage } = props;
  const classes = useStyles(props);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, members.length - page * rowsPerPage);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChangeRowsPerPage(parseInt(event.target.value, 10));
    onChangePage(0);
  };

  return (
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.head}>Avatar</TableCell>
              <TableCell className={classes.head}>Id</TableCell>
              <TableCell className={classes.head}>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              (rowsPerPage > 0
                ? members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : members
              ).map((member: MemberEntity) =>
                <MemberRowComponent key={member.id} member={member}/>
              )
            }
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <MemberFooterComponent
            rows={members.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Table>
      </TableContainer>
  );
}
