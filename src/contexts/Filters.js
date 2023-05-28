import {createContext, useContext, useReducer} from "react";
import {filtersInitialState, filtersReducer} from "../reducers/filters";
import PropTypes from "prop-types";

export const FiltersContext = createContext()
const {Provider} = FiltersContext;

export const Filters = ({children}) => {
    const [state, dispatch] = useReducer(filtersReducer, filtersInitialState)

    const setFilter = (filterKey, filterValue) => {
        dispatch({
            type: filterKey,
            payload: filterValue
        })
    }

  return <Provider value={{
      setFilter, state
    }}>{children}</Provider>
}

export const useFilters = () => {
    const context = useContext(FiltersContext)
    if(!context) throw new Error("hooks must be wrapped with Filters")
    return context
}

Filters.prototype = {
    children: PropTypes.element
}