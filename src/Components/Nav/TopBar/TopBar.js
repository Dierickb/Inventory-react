import "./TopBar.scss"
import {DropDown, HeaderToBar, Search, Icon} from "../../layout";
import InputContainer from "../InputContainer";
import {memo, useCallback} from "react";
import {useLocation} from "react-router-dom";
import burgerIcon from "./icons/burger-solid.svg"

const TopBar = ({setActive, isActive}) => {
    const location = useLocation();
    const showHide = useCallback (() => {
        setActive()
    }, [setActive])

    const handleSearch = (e) => {
        if(e.key !== 'Enter') return
        //e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <div className={`topBar ${isActive ? 'active' : ''}`}>
            <HeaderToBar active={isActive}>
                <Icon imgWd='2em' brdRadImg='5px' bgImg='#03a9f4' onClick={() => showHide()}>
                    <img alt="" src={burgerIcon}/>
                </Icon>
                { (location.pathname === "/dashboard" || location.pathname === "/dashboard/") &&
                    <Search onKeyPress={handleSearch}>
                        <InputContainer placeHolder='Serial' title='Serial' name='serial'/>
                        <InputContainer placeHolder='ScotiaId' title='ScotiaId' name='scotiaId'/>
                        <div className='inputContainer'>
                            <h4>Scotia</h4>
                            <DropDown>
                                <option value="">Empresa</option>
                                <option value="1">GSG</option>
                                <option value="2">GBS</option>
                            </DropDown>
                        </div>
                    </Search>
                }

            </HeaderToBar>
        </div>
    )
}

export default memo(TopBar)