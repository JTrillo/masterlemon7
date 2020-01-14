import * as React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

//Custom hook gracias a Material UI
const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

interface Props {} //Hay que ponerlo por un bug de Material UI con Typescript

export const LoginComponent: React.FunctionComponent = props => {
  const { formContainer } = useStyles(props);

  return (
    <>
      <Card>
        <CardHeader title="Login" />
        <CardContent>
          <div className={formContainer}>
            <TextField label="Name" margin="normal" />
            <TextField label="Password" type="password" margin="normal" />
            <Button variant="contained" color="primary">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};