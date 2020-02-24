import * as React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuItem from '@material-ui/core/MenuItem';
import Rating from '@material-ui/lab/Rating';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { HotelEntityVm, HotelFormErrors } from './hotel-edit.vm';
import { linkRoutes } from "core";
import { HotelEditError } from "./components/hotel-edit-error";

const useStyles = makeStyles((theme: Theme) => ({
	linearProgress: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
	card:{
		width: "600px",
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	media: {
		minWidth: '400px',
		minHeight: '300px',
		margin: '0.25rem'
	},
}));

interface Props {
	onEdit: (hotelInfo: HotelEntityVm) => void;
	onChange: (value: any, field: string) => void;
	hotel: HotelEntityVm;
	errors: HotelFormErrors;
}

export const HotelEditComponent: React.FunctionComponent<Props> = props => {
	const { onEdit, onChange, hotel, errors } = props;
	const { linearProgress, card, media } = useStyles(props);
	const { promiseInProgress } = usePromiseTracker();
	const history = useHistory();

	const goBack = () => history.push(linkRoutes.hotelCollection)

	const saveHotel = () => {
		onEdit(hotel);
	}

	return(
		<>
			{
				(promiseInProgress === true) ?
				<div className={linearProgress}>
					<LinearProgress color="secondary" />
				</div> :
				<Card className={card}>
					<CardContent>
						<Grid container spacing={3}>
							<Grid item xs={2}>
								<Typography variant="body1">Name</Typography>
							</Grid>
							<Grid item xs={10}>
								<TextField
									name="name"
									fullWidth
									value={hotel.name}
									onChange={(event)=>{
										onChange(event.target.value, "name");
									}}
								/>
							</Grid>
						</Grid>
					</CardContent>
					<CardMedia
						className={media}
						image={hotel.picture}
						title={hotel.name}
					/>
					<CardContent>
						<div>
							<Grid container spacing={3}>
								<Grid item xs={2}>
									<Typography variant="body1">Rating</Typography>
								</Grid>
								<Grid item xs={4}>
									<Rating
										value={hotel.rating}
										precision={0.5}
										onChange={(event, newValue)=>{
											onChange(newValue, "rating");;
										}}
									/>
								</Grid>
								<Grid item xs={2}>
									<Typography variant="body1">City</Typography>
								</Grid>
								<Grid item xs={4}>
									<Select
										fullWidth
										value={hotel.city}
										onChange={(event)=>{
											onChange(event.target.value, "city");;
										}}
									>
										<MenuItem value={'Burlingame'}>Burlingame</MenuItem>
										<MenuItem value={'Seattle'}>Seattle</MenuItem>
          					<MenuItem value={'Utah'}>Utah</MenuItem>
          					<MenuItem value={'Washington D. C.'}>Washington D. C.</MenuItem>
									</Select>
								</Grid>
								<Grid item xs={2}>
									<Typography variant="body1">Description</Typography>
								</Grid>
								<Grid item xs={10}>
									<TextField
										name="description"
										fullWidth
										multiline
  									rowsMax={4}
										value={hotel.description}
										onChange={(event)=>{
											onChange(event.target.value, "description");;
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									{
										(errors.name !== undefined || errors.picture !== undefined || errors.rating !== undefined || errors.city !== undefined || errors.description !== undefined) ?
										<HotelEditError name={errors.name} picture={errors.picture} rating={errors.rating} city={errors.city} description={errors.description} />
										: <></>
									}
								</Grid>
							</Grid>
						</div>
					</CardContent>
					<CardActions>
						<IconButton aria-label="save changes" onClick={saveHotel}>
							<SaveIcon />
						</IconButton>
						<IconButton aria-label="go back to hotel list" onClick={goBack}>
							<ArrowBackIcon />
						</IconButton>
					</CardActions>
				</Card>
			}
		</>
	);
};