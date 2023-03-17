import {Icon, OperationLeftBar} from "../../layout";

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

export default OperationList