import * as React from 'react';
import { Link } from 'react-router-dom';
import { CenteredLayout } from 'layouts';
import { linkRoutes } from 'core';

export const HotelCollectionScene = () => (
  <CenteredLayout>
    <h2>Hello from Hotel Collection Scene</h2>
    <Link to={linkRoutes.root}>Navigate to Login</Link>
  </CenteredLayout>
);