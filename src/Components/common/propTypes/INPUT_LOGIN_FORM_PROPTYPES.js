import PropTypes from "prop-types";

export const INPUT_LOGIN_FORM_PROPTYPES = {
    placeholder: PropTypes.string.isRequired,
    mgBtt: PropTypes.string,
    fontSize: PropTypes.string,
    name: PropTypes.string.isRequired,
    minLength: PropTypes.string,
    maxLength: PropTypes.string,
    onChange: PropTypes.string.isRequired,
    error: PropTypes.string,
}