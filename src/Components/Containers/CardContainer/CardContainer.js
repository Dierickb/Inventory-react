import {memo, useState} from "react";
import {setPadding} from "../common";
import {Card} from "../../layout";
import CardHeader from "./CardHeader";
import {CARD_CONTAINER_PROPTYPES} from "../../common/propTypes";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";

const CardContainer = ({Children, title, hasChild, info, hasTextInput, keyValue, ...rest}) => {

    const [isCardVisible, setIsCardVisible] = useState(false)
    const [itemToSearch, setItemToSearch] = useState("")
    const {setInputActive} = rest

    const handleItemToSearch = (item) => setItemToSearch(item)
    const handleToggleForm = () => {
        setIsCardVisible(!isCardVisible)
        !!setInputActive && setInputActive(!isCardVisible)
    }

    const {url} = setPadding(isCardVisible, hasChild, useLocation().pathname.split("/").slice(1))

    return (
        <Card pd="0" mgTp={url && '20px'} >
            <CardHeader title={title} info={info}
                        handleToggleForm={handleToggleForm}
                        handleItemToSearch={handleItemToSearch}
                        isCardVisible={isCardVisible}
                        hasTextInput={hasTextInput}
            />
            {isCardVisible &&
                <Children itemToSearch={itemToSearch} keyValue={keyValue} />
            }
        </Card>
    )
}

export default memo(CardContainer)

CardContainer.prototype = PropTypes.shape(CARD_CONTAINER_PROPTYPES)
