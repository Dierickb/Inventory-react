import "./CardContainer.scss"

import {Card} from "../layout";
import {memo, useState} from "react";
import {useLocation} from "react-router-dom";

const CardContainer = ({Children, title, child}) => {
    const sampleLocation = useLocation().pathname.split("/").slice(1);
    const url = !!sampleLocation.length && sampleLocation[1] === "admin"
    const padding = (url, hasFormRegister, child) => {
        if(!url || !!child) return "0"
        if (!!url && hasFormRegister) return "0 20px 20px 20px"
        if (!!url && !hasFormRegister) return "0 20px 0px 20px"
    }

    const [isCardVisible, setIsCardVisible] = useState(false)
    const handleToggleForm = () => setIsCardVisible(!isCardVisible)

  return (

    <Card pd={padding(url, isCardVisible, child)} mgTp={url && '20px'} >
        <div className="cardHeader" onClick={handleToggleForm}>
            <div>
                <div className="numbers"><h4>{title}</h4></div>
            </div>
            <div className="menu"></div>
        </div>
        {(isCardVisible && !!!Children.length) && <Children />}
        {(isCardVisible && !!Children.length) && (
            <>
                {Children.map(Child => Child)}
            </>
        )}
    </Card>
  )
}

export default memo(CardContainer)