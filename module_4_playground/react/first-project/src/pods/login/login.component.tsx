import * as React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { TextField } from "common/components/forms";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { LoginEntityVm } from './login.vm';
import { Form, Field } from "react-final-form";
import { formValidation } from "./login.validation";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

//Custom hook gracias a Material UI
const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: "400px"
  }
});

interface Props {
  onLogin: (loginInfo: LoginEntityVm) => void;
  initialLogin: LoginEntityVm;
  badLogin: boolean;
  setBadLogin: React.Dispatch<React.SetStateAction<boolean>>;
} //Props hay que ponerlo por un bug de Material UI con Typescript

export const LoginComponent: React.FunctionComponent<Props> = props => {
  const { onLogin, initialLogin, badLogin, setBadLogin } = props;
  //const classes = useStyles(props);

  return (
    <Card>
      <CardHeader title="Login" />
      <CardContent>
          <LoginForm onLogin={onLogin} initialLogin={initialLogin} />
          <LoginAlert badLogin={badLogin} setBadLogin={setBadLogin} />
      </CardContent>
    </Card>
  );
};

const LoginAlert: React.FunctionComponent<Omit<Props, 'onLogin' | 'initialLogin'>> = props => {
  const { badLogin, setBadLogin } = props;

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setBadLogin(false);
  };

  return(
    <Snackbar open={badLogin} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        Invalid credentials!!, use 12345678A/password
      </Alert>
    </Snackbar>
  );
};

const LoginForm: React.FunctionComponent<Omit<Props,'badLogin' | 'setBadLogin'>> = props => {
  const { onLogin, initialLogin } = props;
  const { formContainer } = useStyles(props);

  return(
    <Form
      onSubmit={onLogin}
      initialValues={initialLogin}
      validate={formValidation.validateForm}
      render={
        ({ handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={formContainer}>
              <Field
                margin="normal"
                fullWidth
                name="login"
                component={TextField}
                type="text"
                label="Name"
              />
              <Field
                margin="normal"
                name="password"
                component={TextField}
                type="password"
                label="Password"
              />
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
              <pre>{JSON.stringify(values, undefined, 2)}</pre>
              <Field name="login">
                {props => <pre>{JSON.stringify(props, undefined, 2)}</pre>}
              </Field>
            </div>
          </form>
        )
      }
    />
  );
};