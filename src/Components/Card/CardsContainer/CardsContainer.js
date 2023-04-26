import "./CardsContainer.scss"

import {Card} from "../../layout";
import {memo, useState} from "react";
import CardHeader from "./CardsHeader";
import {SetPadding} from "./setPadding";

const CardsContainer = ({Children, title, child, info}) => {
    const [isCardVisible, setIsCardVisible] = useState(false)
    const handleToggleForm = () => setIsCardVisible(!isCardVisible)

    const {padding, url} = SetPadding(isCardVisible, child)

  return (
    <Card pd={padding} mgTp={url && '20px'} >
        <CardHeader title={title} info={info}
                    handleToggleForm={handleToggleForm}
                    isCardVisible={isCardVisible}
        />
        {(isCardVisible && !!Children.length) && (
            <>
                {Children?.map(Child => Child)}
            </>
        )}
    </Card>
  )
}

export default memo(CardsContainer)