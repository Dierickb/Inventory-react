import PropTypes from "prop-types";
import {SET_PADDING} from "../../common/propTypes/common";

export const setPadding = (hasFormRegister, hasChild, sampleLocation) => {
    const url = !!sampleLocation.length && sampleLocation[1] === "admin"

    if(!url || !!hasChild) return {padding: "0",url: url}
    if (!!url && hasFormRegister) return {padding: "0 20px 20px 20px", url: url}
    if (!!url && !hasFormRegister) return {padding: "0 20px 0px 20px", url: url}
}

setPadding.prototype = PropTypes.shape(SET_PADDING)