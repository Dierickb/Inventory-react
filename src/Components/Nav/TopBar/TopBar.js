import "./TopBar.scss"
import {DropDown, HeaderToBar, Search, Icon, InputsContainer} from "../../layout";
import InputContainer from "../InputContainer";
import {memo, useCallback} from "react";
import {useLocation} from "react-router-dom";
import burgerIcon from "./icons/burger-solid.svg"
import DropDownContainer from "../DropDownContainer";

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
                        <DropDownContainer title="Scotia"
                                           values={[
                                               {value: "", optionValue: "Empresa"},
                                               {value: "1", optionValue: "GSG"},
                                               {value: "2", optionValue: "GBS"},
                                           ]}
                        />
                    </Search>
                }

            </HeaderToBar>
        </div>
    )
}

export default memo(TopBar)