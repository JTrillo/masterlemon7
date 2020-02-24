import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginScene, HotelCollectionScene, HotelEditScene } from "scenes";
import { switchRoutes, SessionProvider } from 'core';
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	body: {
		margin: 0,
		padding: 0,
		display: 'flex',
		flexWrap: 'wrap',
		minHeight: '100vh',
	},
  footer: {
		alignSelf: 'flex-end',
		lineHeight: 3,
		textAlign: 'center',
		width: '100%',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		fontFamily: theme.typography.fontFamily
  },
}));

interface Props{}

const App = (props: Props) => {
	const { body } = useStyles(props);

	return(
		<div className={body}>
		<SessionProvider>
			<HashRouter>
				<Switch>
					<Route exact={true} path={[switchRoutes.root, switchRoutes.login]} component={LoginScene} />
					<Route path={switchRoutes.hotelCollection} component={HotelCollectionScene} />
					<Route path={switchRoutes.hotelEdit} component={HotelEditScene} />
				</Switch>
			</HashRouter>
		</SessionProvider>
		</div>
	);
};

const Footer = (props: Props) => {
  const { footer } = useStyles(props);

  return(
    <footer className={footer}>
			Web application made by Joaquín Trillo
		</footer>
  );
};

ReactDOM.render(
	<>
		<App />
		<Footer />
	</>,
	document.getElementById("root")
);