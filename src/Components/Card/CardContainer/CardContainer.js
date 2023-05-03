import {memo, useState} from "react";
import {SetPadding} from "../CardsContainer/setPadding";
import {Card} from "../../layout";
import CardHeader from "./CardHeader";

const CardContainer = ({Children, title, child, info, textInput}) => {
    const [isCardVisible, setIsCardVisible] = useState(false)
    const [itemToSearch, setItemToSearch] = useState("")

    const handleItemToSearch = (item) => {setItemToSearch(item)}
    const handleToggleForm = () => setIsCardVisible(!isCardVisible)

    const {url} = SetPadding(isCardVisible, child)

    return (
        <Card pd="0" mgTp={url && '20px'} >
            <CardHeader title={title} info={info}
                        handleToggleForm={handleToggleForm}
                        handleItemToSearch={handleItemToSearch}
                        isCardVisible={isCardVisible}
                        textInput={textInput}
            />
            {isCardVisible &&
                <Children itemToSearch={itemToSearch}/>
            }
        </Card>
    )
}

export default memo(CardContainer)