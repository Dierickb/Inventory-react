import {Icon, OperationLeftBar} from "../../layout";
import {memo} from "react";
import PropTypes from "prop-types";

const OperationList = ({title, image, onClick}) => {
  return (
      <OperationLeftBar title={title} onClick={onClick}>
          <Icon>
              <img alt="" className="fas" src={image}/>
          </Icon>
          <span className="title">{title}</span>

      </OperationLeftBar>
  )
}

export default memo(OperationList)

OperationList.prototype = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
}