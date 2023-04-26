import {memo} from "react";

const CardsHeader = ({handleToggleForm, title, info}) => {

  return (
      <div className="cardHeader" onClick={handleToggleForm}>
          <div className="numbers">
              <h4>{title}</h4>
          </div>
          <div className="menu">{info}</div>
      </div>
  )
}
export default memo(CardsHeader)