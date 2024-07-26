import { PropTypes } from "prop-types";

import classes from "./HomeItem.module.css";
import { Card } from "src/components";
import { useNavigate } from "react-router-dom";

const HomeItem = ({ home }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/homes/todos')
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
