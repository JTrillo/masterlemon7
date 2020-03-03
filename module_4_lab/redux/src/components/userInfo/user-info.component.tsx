import * as React from 'react';
import { useParams } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import { UserEntity } from "../../model";
import { linkRoutes } from "../../core";
import { UserInfoTableComponent } from "./components/user-info-table.component";

const useStyles = makeStyles((theme: Theme) => ({
  linearProgress: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',
    padding: '2rem',
    overflow: 'auto',
  },
  card: {
    maxWidth: 345,
  },
}));

const useUser = (props: Props) => {
  const { user, loadUser } = props;
  const { login } = useParams();

  React.useEffect(() => {
    loadUser(login);
  }, []);

  return { user };
};

interface Props {
  user: UserEntity;
  loadUser: (userLogin: string) => void;
}

export const UserInfoComponent = (props: Props) => {
  const { user } = useUser(props);
  const history = useHistory();
  const classes = useStyles(props);
  const { promiseInProgress } = usePromiseTracker();

  const goBack = () => history.push(linkRoutes.membersTable);
  const goGithub = () => window.open(user.html_url);

  return(
    <>
    {
      (promiseInProgress === true) ?
      <div className={classes.linearProgress}>
        <LinearProgress color="primary" />
      </div> :
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label={user.name} src={user.avatar_url} />
            }
            title={user.login}
            subheader={user.name}
          />
          <CardContent>
            <UserInfoTableComponent
              company={user.company}
              email={user.email}
              public_repos={user.public_repos}
              followers={user.followers}
              following={user.following}
            />
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="go back" onClick={goBack}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton aria-label="visit github user main page" onClick={goGithub}>
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    }
    </>
  );
}