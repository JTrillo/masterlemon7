import * as React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { MemberTableComponent } from './components/member-table.component';
import { MemberEntity } from '../../model'

const useStyles = makeStyles((theme: Theme) => ({
  textfield: {
    marginRight: "1rem",
  },
  linearProgress: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

interface Props {
  members: Array<MemberEntity>;
  loadMembers: (organization: string) => void;
  organization: string;
  onChangeOrganization: (organization: string) => void;
  page: number;
  onChangePage: (page: number) => void;
  rowsPerPage: number;
  onChangeRowsPerPage: (rowsPerPage: number) => void;
}

export const MemberListComponent = (props : Props) => {
  const { members, organization, loadMembers, onChangeOrganization } = props;
  const { page, onChangePage, rowsPerPage, onChangeRowsPerPage } = props;
  const classes = useStyles(props);
  const { promiseInProgress } = usePromiseTracker();

  return (
  <div>
    <Typography variant="h2"> Members Page</Typography>
    <Box m={1}>
      <TextField value={organization} onChange={(e) => onChangeOrganization(e.target.value)} className={classes.textfield} />
      <Button variant="contained" color="primary" onClick={() => loadMembers(organization)}>Load</Button>
    </Box>
    {
      (promiseInProgress === true) ?
      <div className={classes.linearProgress}>
				<LinearProgress color="primary" />
      </div> :
      (members.length !== 0) ?
      <MemberTableComponent members={members} page={page} onChangePage={onChangePage} rowsPerPage={rowsPerPage} onChangeRowsPerPage={onChangeRowsPerPage} /> :
      <Typography variant="body1">
        Please press button 'Load'
      </Typography>
    }
    
  </div>
  );
}
