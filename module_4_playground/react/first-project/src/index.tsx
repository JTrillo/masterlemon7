import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginScene, HotelCollectionScene } from "scenes";
import { switchRoutes, SessionProvider } from 'core';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
});

const Footer = props => {
  const { appBar } = useStyles(props);

  return(
    <AppBar position="fixed" color="primary" className={appBar}>
      <Toolbar variant="dense">
				<Typography variant="h6" color="inherit">
      		Web application made by Joaquín Trillo
					</Typography>
      </Toolbar>
    </AppBar>
  );
};

ReactDOM.render(
	<>
		<SessionProvider>
			<HashRouter>
				<Switch>
					<Route exact={true} path={[switchRoutes.root, switchRoutes.login]} component={LoginScene} />
					<Route path={switchRoutes.hotelCollection} component={HotelCollectionScene} />
				</Switch>
			</HashRouter>
		</SessionProvider>
		<Footer></Footer>
	</>,
	document.getElementById("root")
);