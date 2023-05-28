import PropTypes from "prop-types";

export const CARDS_CONTAINER_PROPTYPES = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    child: PropTypes.element,
    info: PropTypes.element,
}

export const CARDS_HEADER_PROPTYPES = {
    handleToggleForm: PropTypes.func,
    title: PropTypes.string.isRequired,
    info: PropTypes.string,
}