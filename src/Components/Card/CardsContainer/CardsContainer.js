import "./CardsContainer.scss"

import {Card} from "../../layout";
import {useState} from "react";
import CardsHeader from "./CardsHeader";
import {SetPadding} from "./setPadding";

const CardsContainer = ({children, title, child, info}) => {
    const [isCardVisible, setIsCardVisible] = useState(false)
    const handleToggleForm = () => setIsCardVisible(!isCardVisible)

    const {padding, url} = SetPadding(isCardVisible, child)

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