import {Search} from "../../../layout";
import InputContainer from "../../InputContainer/InputContainer";
import DropDownContainer from "../../DropDownContainer";
import {memo, useCallback} from "react";
import {useLocation} from "react-router-dom";

const SearchByPath = () => {
    const location = useLocation();
    const handleSearch = useCallback((e) => {
        if(e.key !== 'Enter') return
        //e.preventDefault()
        console.log(e.target.value)
    }, [])

  return (
      <>
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
      </>
  )

}

export default memo(SearchByPath)