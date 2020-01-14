import * as React from 'react';
import { Link } from 'react-router-dom';
import { CenteredLayout } from 'layouts';
import { linkRoutes } from 'core';
import { LoginContainer } from "pods/login";

export const LoginScene = () => (
  <CenteredLayout>
    <LoginContainer />
  </CenteredLayout>
);