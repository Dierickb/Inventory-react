import PropTypes from "prop-types";

const BodyDeviceInfo = ({builder, device, model, scotia}) => {
  return (
      <>
          <div className="cardSection deviceInfo">
              Fabricante: &nbsp;
              <p>{builder}</p>
          </div>
          <div className="cardSection deviceInfo">
              Producto: &nbsp;
              <p> {device}</p>
          </div>
          <div className="cardSection deviceInfo">
              Modelo: &nbsp;
              <p> {model}</p>
          </div>
          <div className="cardSection deviceInfo bold">
              Scotia{scotia}
          </div>
      </>
  )
}

export default BodyDeviceInfo

BodyDeviceInfo.propTypes = {
    builder: PropTypes.string,
    device: PropTypes.string,
    model: PropTypes.string,
    scotia: PropTypes.string,
}