import PropTypes from 'prop-types';

export const ChildrenProp = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);

export const PersonProp = PropTypes.shape({
  birth_year: PropTypes.string,
  created: PropTypes.string,
  edited: PropTypes.string,
  eye_color: PropTypes.string,
  films: PropTypes.arrayOf(PropTypes.string),
  gender: PropTypes.string,
  hair_color: PropTypes.string,
  height: PropTypes.string,
  homeworld: PropTypes.string,
  mass: PropTypes.string,
  name: PropTypes.string,
  skin_color: PropTypes.string,
  species: PropTypes.arrayOf(PropTypes.string),
  starships: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
  vehicles: PropTypes.arrayOf(PropTypes.string),
});