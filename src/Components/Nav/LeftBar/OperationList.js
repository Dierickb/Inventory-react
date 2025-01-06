import {Icon} from "../../layout";
import {OperationLeftBarStyled} from "./OperationLeftBarStyled";
import {memo} from "react";
import PropTypes from "prop-types";

const OperationList = ({title, image, onClick}) => {
  return (
      <OperationLeftBarStyled title={title} onClick={onClick}>
          <Icon>
              <img alt="" className="fas" src={image}/>
          </Icon>
          <span className="title">{title}</span>

      </OperationLeftBarStyled>
  )
}

export default memo(OperationList)

OperationList.prototype = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
}