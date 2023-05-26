import PropTypes from "prop-types";

export const CARD_CONTAINER = {
    Children: PropTypes.element,
    title: PropTypes.string.isRequired,
    hasChild: PropTypes.element,
    info: PropTypes.element,
    hasTextInput: PropTypes.bool,
    keyValue: PropTypes.string,
}

export const CARD_HEADER = {
    isCardVisible: PropTypes.bool.isRequired ,
    handleItemToSearch: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    handleToggleForm: PropTypes.func.isRequired,
    info: PropTypes.element,
    textInput: PropTypes.bool,
}