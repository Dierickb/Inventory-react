import PropTypes from "prop-types";

export const DEVICE_PROPTYPES = {
    builder: PropTypes.string.isRequired,
    device: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    scotia: PropTypes.string.isRequired,
    serial: PropTypes.string.isRequired,
    entryDate: PropTypes.string,
    pxeDate: PropTypes.string,
    image: PropTypes.string,
    internOperation: PropTypes.string,
}

