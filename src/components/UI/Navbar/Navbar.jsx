import { PropTypes } from 'prop-types';

import classes from './Navbar.module.css';
import { NavItem } from 'src/components';

const Navbar = ({ userId }) => {
  return (
    <nav className={ classes.navbar }>
      <ul className={ classes.navbar__items }>
        <NavItem icon="user" href="/users/todos" />
        <NavItem icon="user" href="#" />
        <NavItem icon="user" href="#" />
        <NavItem icon="user" href={`/users/${userId}`} />
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  userId: PropTypes.string
}

export default Navbar;
