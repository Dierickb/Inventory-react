import {Icon, Search} from "../../../layout";
import InputContainer from "../../../Inputs/InputContainer/InputContainer";
import {memo} from "react";

import DropDownImage from "../../../Inputs/DropDownImage";
import DropDownBusinesses from "../../../Inputs/DropDownBusinesses";
import {useDeviceFilter, useHandleSearch} from "./hooks";
import {useBootCenterDevices, useFilters} from "../../../../contexts";
import trashIcon from "../icons/trash-can-regular.svg";

const SearchByPath = () => {

    const {setFilter} = useFilters()
    const {handleSearchOnKeyPress, handleClearFilters, 
        handleSearchOnChange, state} = useHandleSearch(setFilter)
    const { findDeviceBySerial, findDeviceByBusinessOrImage, findDeviceByScotiaId, removeAllListeners } = useBootCenterDevices()
    
    useDeviceFilter(state, findDeviceByBusinessOrImage, findDeviceByScotiaId, setFilter, removeAllListeners)

    return (
        <>
            <Search>

                <InputContainer key={!state?.serial ? "serial" : state.serial }
                                onKeyPress={(e) => handleSearchOnKeyPress(e, findDeviceBySerial)}
                                placeHolder='Serial' title='Serial' name='serial'
                                defaultValue={state.serial} />

                <DropDownImage onChange={handleSearchOnChange} image={state?.image} />

                <DropDownBusinesses onChange={handleSearchOnChange} business={state?.business} />

            </Search>

            <Icon minWd="0" mg="7px 14px 7px 7px" imgWd='2em' brdRadImg='5px' bgImg='#03a9f4'
                  onClick={handleClearFilters} >
                <img className="trash" alt="" src={trashIcon} title="Clear"/>
            </Icon>
        </>

    )
}

export default memo(SearchByPath)