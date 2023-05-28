import "./CardsContainer.scss"

import {Card} from "../../layout";
import {useState} from "react";
import CardsHeader from "./CardsHeader";
import {setPadding} from "../common";
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import {CARDS_CONTAINER_PROPTYPES} from "../../common/propTypes";

const CardsContainer = ({children, title, hasChild, info}) => {
    const [isCardVisible, setIsCardVisible] = useState(false)
    const handleToggleForm = () => setIsCardVisible(!isCardVisible)

    const {padding, url} = setPadding(isCardVisible, hasChild, useLocation().pathname.split("/").slice(1))

  return (
    <Card pd={padding} mgTp={url && '20px'} >
        <CardsHeader title={title} info={info}
                    handleToggleForm={handleToggleForm}
                    isCardVisible={isCardVisible}
        />
        {isCardVisible &&
            children
        }
    </Card>
  )
}

export default CardsContainer

CardsContainer.prototype = PropTypes.shape(CARDS_CONTAINER_PROPTYPES)