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
import { UserEntity, createDefaultUserEntity } from "../../model/user";
import { memberAPI } from "../../api/memberAPI";
import { linkRoutes } from "../../core";
import { MemberCardTable } from "./memberCardTable";

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

interface Props {}

const useMember = () => {
  const [member, setMember] = React.useState<UserEntity>(createDefaultUserEntity());
  const { login } = useParams();

  React.useEffect(() => {
    trackPromise(
      memberAPI.getMember(login)
      .then(member => setMember(member))
      .catch(() => setMember(createDefaultUserEntity()))
    )
  }, []);

  return { member }
}

export const MemberCardComponent = (props: Props) => {
  const { member } = useMember();
  const history = useHistory();
  const classes = useStyles(props);
  const { promiseInProgress } = usePromiseTracker();

  const goBack = () => history.push(linkRoutes.membersTable);
  const goGithub = () => window.open(member.html_url);

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
              <Avatar aria-label={member.name} src={member.avatar_url} />
            }
            title={member.login}
            subheader={member.name}
          />
          <CardContent>
            <MemberCardTable
              company={member.company}
              email={member.email}
              public_repos={member.public_repos}
              followers={member.followers}
              following={member.following}
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