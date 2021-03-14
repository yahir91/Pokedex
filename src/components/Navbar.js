import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbarPoke">
    <Link to="/">
      <img src="Pokédex_logo.png" alt="pokedex" />
    </Link>
  </div>
);

export default Navbar;
