import {DropDown, HeaderToBar, Search, Icon} from "../../layout";
import InputContainer from "../InputContainer";
import {useCallback} from "react";

const TopBar = ({setActive, active}) => {
    const showHide = useCallback (() => {
        setActive()
    }, [setActive])

    const handleSearch = (e) => {
        if(e.key !== 'Enter') return
        //e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <HeaderToBar active={active}>
            <Icon imgWd='2em' brdRadImg='5px' bgImg='#03a9f4' onClick={() => showHide()}>
                <img alt="" src={`img/icons/burger-solid.svg`}/>
            </Icon>
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
            <div className="user">
            </div>
        </HeaderToBar>
    )
}

export default TopBar