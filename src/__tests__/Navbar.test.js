import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

test('Componnet renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Navbar />
      ,
    </MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
