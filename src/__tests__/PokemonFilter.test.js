import React from 'react';
import renderer from 'react-test-renderer';
import PokemonFilter from '../components/PokemonFilter';

const handleType = () => {};
test('Componnet renders correctly', () => {
  const component = renderer.create(
    <PokemonFilter event={handleType} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
