import {Icon, OperationLeftBar} from "../../layout";
import {memo} from "react";

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