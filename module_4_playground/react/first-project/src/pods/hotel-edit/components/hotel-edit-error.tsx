import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  error: {
    color: 'red'
  }
});

interface Props {
  name: string;
  picture: string;
  rating: string;
  city: string;
  description: string;
}

export const HotelEditError = (props: Props) => {
  const { name, picture, rating, city, description } = props
  const classes = useStyles(props);

  return(
    <>
      <Typography variant="body2" className={classes.error}>There are errors in the next fields:</Typography>
      {
        (name !== undefined) ?
        <Typography variant="body2" className={classes.error}><b>NAME: </b>{name}</Typography> :
        <></>
      }
      {
        (picture !== undefined) ?
        <Typography variant="body2" className={classes.error}><b>PICTURE: </b>{picture}</Typography> :
        <></>
      }
      {
        (rating !== undefined) ?
        <Typography variant="body2" className={classes.error}><b>RATING: </b>{rating}</Typography> :
        <></>
      }
      {
        (city !== undefined) ?
        <Typography variant="body2" className={classes.error}><b>CITY: </b>{city}</Typography> :
        <></>
      }
      {
        (description !== undefined) ?
        <Typography variant="body2" className={classes.error}><b>DESCRIPTION: </b>{description}</Typography> :
        <></>
      }
    </>
  );
};