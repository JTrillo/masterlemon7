import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { usePromiseTracker } from 'react-promise-tracker';
import { HotelEntityVm } from "./hotel-collection.vm";
import { HotelCard } from "./components/hotel-card.component";

const useStyles = makeStyles((theme: Theme) => ({
	listLayout: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	linearProgress: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

interface Props {
  hotelCollection: HotelEntityVm[]
}

export const HotelCollectionComponent: React.FunctionComponent<Props> = props => {
	const { hotelCollection } = props;
	const classes = useStyles(props);
	const { promiseInProgress } = usePromiseTracker();

  return (
		<>
			{
				(promiseInProgress === true) ?
				<div className={classes.linearProgress}>
					<LinearProgress color="secondary" />
				</div> :
				<div className={classes.listLayout}>
					{hotelCollection.map(hotel => (
						<HotelCard key={hotel.id} hotel={hotel} />
					))}
				</div>
			}
		</>
	);
};