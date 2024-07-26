import { PropTypes } from 'prop-types';

import classes from './Navbar.module.css';
import { NavItem } from 'src/components';

const Navbar = ({ userId, homeId }) => {
  return (
    <nav className={ classes.navbar }>
      <ul className={ classes.navbar__items }>
        <NavItem icon="todo" href={`/homes/${homeId}/todos`} />
        <NavItem icon="note" href={`/homes/${homeId}/notes`} />
        <NavItem icon="calendar" href={`/homes/${homeId}/events`} />
        <NavItem icon="user" href={`/users/${userId}`} />
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  userId: PropTypes.string
}

export default Navbar;
