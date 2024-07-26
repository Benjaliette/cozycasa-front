import { PropTypes } from 'prop-types';

import classes from './Navbar.module.css';
import { NavItem } from 'src/components';

const Navbar = ({ userId }) => {
  return (
    <nav className={ classes.navbar }>
      <ul className={ classes.navbar__items }>
        <NavItem icon="todo" href="/homes/todos" />
        <NavItem icon="note" href="/homes/notes" />
        <NavItem icon="calendar" href="/homes/events" />
        <NavItem icon="user" href={`/users/${userId}`} />
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  userId: PropTypes.string
}

export default Navbar;
