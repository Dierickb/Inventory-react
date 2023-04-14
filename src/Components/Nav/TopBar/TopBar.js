import "./TopBar.scss"
import { HeaderToBar, Icon} from "../../layout";
import {memo, useCallback} from "react";
import burgerIcon from "./icons/burger-solid.svg"
import SearchByPath from "./SearchByPath";

const TopBar = ({setActive, isActive}) => {
    const showHide = useCallback (() => {
        setActive()
    }, [setActive])

    return (
        <div className={`topBar ${isActive ? 'active' : ''}`}>
            <HeaderToBar active={isActive}>
                <Icon imgWd='2em' brdRadImg='5px' bgImg='#03a9f4' onClick={() => showHide()}>
                    <img alt="" src={burgerIcon}/>
                </Icon>
                <SearchByPath />
            </HeaderToBar>
        </div>
    )
}

export default memo(TopBar)