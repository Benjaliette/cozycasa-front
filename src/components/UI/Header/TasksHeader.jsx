import classes from './Header.module.css';

import { PropTypes } from 'prop-types';

const TasksHeader = ({ username }) => {
  return (
    <div className={ classes.header }>
      <h1>{ username }</h1>
    </div>
  )
}

TasksHeader.propTypes = {
  username: PropTypes.string
}

export default TasksHeader;
