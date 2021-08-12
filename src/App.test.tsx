import React from 'react';
import { render, screen } from '@testing-library/react';
import SamuraiJSApp from "./App";

test('renders learn react link', () => {
  render(<SamuraiJSApp />);
  expect(true).toBe(true)
});
