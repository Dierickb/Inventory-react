import PropTypes from "prop-types";
import {CARD_HEADER} from "../../common/propTypes";

const CardHeader = ({isCardVisible, handleItemToSearch, title, handleToggleForm, info, hasTextInput}) => {
    const setItemToSearch = (e) => {
        if(hasTextInput) {
            if(e.key !== 'Enter') return
            handleItemToSearch(e.target.value)
            return;
        }
        handleItemToSearch(e.target.value)
    }

  return (
      <div className={!isCardVisible ? "cardHeader" : "cardHeader no-pointer" }
           onClick={!isCardVisible ? handleToggleForm : ()=>{}}>
          <div className={isCardVisible ? "numbers pointer" : "numbers pointer"}
               onClick={isCardVisible ? handleToggleForm : ()=>{}}>
              <h4>{title}</h4>
          </div>
          {hasTextInput &&
              <div onKeyDown={(e) => setItemToSearch(e)} className="menu">
                  {info}
              </div>
          }
          {!hasTextInput &&
              <div onChange={(e) => setItemToSearch(e)} className="menu">
                  {info}
              </div>
          }
      </div>
  )
}

export default CardHeader

CardHeader.prototype = PropTypes.shape(CARD_HEADER)