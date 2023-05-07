import "./TopBar.scss"
import { HeaderToBar, Icon} from "../../layout";
import {memo, useCallback} from "react";
import burgerIcon from "./icons/burger-solid.svg"
import SearchByPath from "./SearchByPath";
import PropTypes from "prop-types";

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

TopBar.prototype = {
    setActive: PropTypes.func,
    isActive: PropTypes.bool,
}