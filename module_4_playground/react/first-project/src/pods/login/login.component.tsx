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

//Custom hook gracias a Material UI
const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

interface Props {
  onLogin: (loginInfo: LoginEntityVm) => void;
  initialLogin: LoginEntityVm;
} //Props hay que ponerlo por un bug de Material UI con Typescript

export const LoginComponent: React.FunctionComponent<Props> = props => {
  const { formContainer } = useStyles(props);
  const { onLogin, initialLogin } = props;

  return (
    <>
      <Card>
        <CardHeader title="Login" />
        <CardContent>
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
        </CardContent>
      </Card>
    </>
  );
};