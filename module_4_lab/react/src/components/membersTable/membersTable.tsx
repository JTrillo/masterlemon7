import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { MemberEntity } from "../../model/member";
import { memberAPI } from "../../api/memberAPI";
import { MemberRow } from "./memberRow";
import { MemberHead } from "./memberHead";
import { MemberFooter } from "./memberFooter";

const useStyles = makeStyles((theme: Theme) => ({
  textfield: {
    marginRight: "1rem",
  },
  table: {
    minWidth: 650,
  },
  linearProgress: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

interface Props {}

const useMembers = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const loadAndSetMembers = (organization: string) => {
    trackPromise(
      memberAPI.getAllMembers(organization)
      .then(members => setMembers(members))
      .catch(error => setMembers([]))
    );
  };

  return { members, loadAndSetMembers };
}

export const MembersTableComponent = (props: Props) => {
  const { members, loadAndSetMembers } = useMembers();
  const [organization, setOrganization] = React.useState<string>("lemoncode");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles(props);
  const { promiseInProgress } = usePromiseTracker();
  const [message, setMessage] = React.useState<string>("Please press button 'Load'");

  const loadMembers = () => {
    loadAndSetMembers(organization);
    if(members.length === 0) setMessage(`Organization ${organization} has no members`);
  };

  const handleChangeOrganization = (event) => {
    setOrganization(event.target.value);
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, members.length - page * rowsPerPage);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="row">
      <Typography variant="h2"> Members Page</Typography>
      <Box m={1}>
        <TextField value={organization} onChange={handleChangeOrganization} className={classes.textfield} />
        <Button variant="contained" color="primary" onClick={loadMembers}>Load</Button>
      </Box>
      {
        (promiseInProgress === true) ?
        <div className={classes.linearProgress}>
					<LinearProgress color="primary" />
				</div> :
        (members.length !== 0) ?
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="simple table">
            <MemberHead />
            <TableBody>
              {(rowsPerPage > 0
                ? members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : members
              ).map((member: MemberEntity) => (
                <MemberRow key={member.id} member={member} />
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <MemberFooter rows={members.length} page={page} rowsPerPage={rowsPerPage} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage} />
          </Table>
        </TableContainer> :
        <Typography variant="body1">
          {message}
        </Typography>
      }
    </div>
  );
};
