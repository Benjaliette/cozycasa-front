import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';
import { UserIcon } from 'src/components';

const NavItem = ({ icon, href }) => {
  let iconComponent;

  switch (icon) {
    case 'user':
      iconComponent = < UserIcon />
      break;

    default:
      break;
  }

  return (
    <li className={ classes.navbar__item }>
      <Link to={ href } >
        { iconComponent }
      </Link>
    </li>
  )
}

NavItem.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string,
};

export default NavItem;
