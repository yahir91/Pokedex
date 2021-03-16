import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import PokemonDetails from '../components/PokemonDetails';

test('Componnet renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <PokemonDetails />
      ,
    </MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
