import {Icon, Search} from "../../../layout";
import InputContainer from "../../InputContainer/InputContainer";
import {memo} from "react";

import DropDownImage from "../../../Inputs/DropDownImage";
import DropDownBusinesses from "../../../Inputs/DropDownBusinesses";
import {useDeviceFilter, useHandleSearch} from "./hooks";
import {useBootCenterDevices, useFilters} from "../../../../contexts";
import trashIcon from "../icons/trash-can-regular.svg";

const SearchByPath = () => {

    const {handleSearchOnChange, handleSearchOnKeyPress, handleClearFilters, state} = useHandleSearch()
    const { findDevice, findDeviceByBusinessOrImage } = useBootCenterDevices()
    const {setFilter} = useFilters()

    useDeviceFilter(state, findDevice, findDeviceByBusinessOrImage, setFilter)

    return (
        <>
            <Search>

                <InputContainer key={!state?.serial ? "serial" : state.serial }
                                onKeyPress={handleSearchOnKeyPress}
                                placeHolder='Serial' title='Serial' name='serial'
                                defaultValue={state.serial} />

                <DropDownImage onChange={handleSearchOnChange} image={state?.image} />

                <DropDownBusinesses onChange={handleSearchOnChange} business={state?.business} />

            </Search>

            <Icon minWd="0" mg="7px 7px 7px 7px" imgWd='2em' brdRadImg='5px' bgImg='#03a9f4'
                  onClick={handleClearFilters} >
                <img className="trash" alt="" src={trashIcon} title="Clear"/>
            </Icon>
        </>

    )
}

export default memo(SearchByPath)