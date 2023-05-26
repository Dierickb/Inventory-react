import { PropTypes } from 'react';

export const DEVICE_PROPTYPES = PropTypes.shape({
    builder: PropTypes.string.isRequired,
    device: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    scotia: PropTypes.string.isRequired,
    serial: PropTypes.string.isRequired,
    entryDate: PropTypes.string,
    pxeDate: PropTypes.string,
    image: PropTypes.string,
    internOperation: PropTypes.string,
}).isRequired

