import * as React from 'react';
import { Link } from 'react-router-dom';

export const LoginScene = () => (
  <>
    <h2>Hello from login Scene</h2>
    <Link to="/hotel-collection">Navigate to Hotel Collection</Link>
  </>
);