import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import classes from "./HomeItem.module.css";
import { Card } from "src/components";
import { getTodos } from "src/store/todos/todoActions";

const HomeItem = ({ home }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(getTodos({ homeId: home._id }));
    navigate(`/homes/${home._id}/todos`)
  }

  return (
    <>
      <Card home={ home } onClick={ handleClick }></Card>
    </>
  )
}

HomeItem.propTypes = {
  home: PropTypes.any
}

export default HomeItem;
