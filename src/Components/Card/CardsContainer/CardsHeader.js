import {memo} from "react";
import PropTypes from "prop-types";
import {CARDS_HEADER_PROPTYPES} from "../../common/propTypes";

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

CardsHeader.prototype = PropTypes.shape(CARDS_HEADER_PROPTYPES)