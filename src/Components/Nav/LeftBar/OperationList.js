import {Icon, OperationLeftBar} from "../../layout";
import {memo} from "react";

const OperationList = ({title, image, onClick}) => {
  return (
      <li>
          <OperationLeftBar title={title} onClick={onClick}>
              <Icon>
                  <img alt="" className="fas" src={image}/>
              </Icon>
              <span className="title">{title}</span>

          </OperationLeftBar>
      </li>

  )
}

export default memo(OperationList)