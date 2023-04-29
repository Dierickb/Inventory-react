import {Search} from "../../../layout";
import InputContainer from "../../InputContainer/InputContainer";
import {memo} from "react";
import DropDownImage from "../../../Inputs/DropDownImage";
import DropDownBusinesses from "../../../Inputs/DropDownBusinesses";
import useDevicesFiltered from "./hooks";

const SearchByPath = () => {

    const [handleSearchOnChange, handleSearchOnKeyPress, state] = useDevicesFiltered()

  return (
      <Search onKeyPress={handleSearchOnKeyPress} onChange={handleSearchOnChange} >

          <InputContainer key={!state?.serial ? "serial" : state.serial }
                          placeHolder='Serial' title='Serial' name='serial'
                          defaultValue={state.serial} />

          <DropDownImage image={state?.image} />

          <DropDownBusinesses business={state?.business} />

      </Search>
  )
}

export default memo(SearchByPath)