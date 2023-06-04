import "./TopBar.scss"
import { HeaderToBar, Icon} from "../../layout";
import {memo, useCallback} from "react";
import burgerIcon from "./icons/burger-solid.svg"
import SearchByPath from "./SearchByPath";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";
import {pathsDefault} from "../../../utils/utilities";

const TopBar = ({setActive, isActive}) => {
    const location = useLocation()
    const showHide = useCallback (() => {
        setActive()
    }, [setActive])

    return (
        <div className={`topBar ${isActive ? 'active' : ''}`}>
            <HeaderToBar active={isActive}>
                <Icon role="button" imgWd='2em' brdRadImg='5px' bgImg='#03a9f4' onClick={() => showHide()}>
                    <img alt="" src={burgerIcon}/>
                </Icon>

                {
                    (location.pathname === pathsDefault.HOME) && <SearchByPath />
                }

            </HeaderToBar>
        </div>
    )
}

export default memo(TopBar)

TopBar.prototype = {
    setActive: PropTypes.func,
    isActive: PropTypes.bool,
}