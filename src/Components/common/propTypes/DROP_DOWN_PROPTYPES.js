import PropTypes from "prop-types";
import {bool, number, string} from "yup";

export const DROP_DOWN_PROPTYPES = {
    business: PropTypes.string,
    display: PropTypes.string,
    mgLeft: PropTypes.string,
    padding: PropTypes.string,
    mgLSelect: PropTypes.string,
    hgSelect: PropTypes.string,
    rest: PropTypes.object,
    defaultValue: PropTypes.arrayOf([bool, number, string])
}