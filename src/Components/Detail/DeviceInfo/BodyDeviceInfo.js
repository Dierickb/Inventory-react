import PropTypes from "prop-types";

const  BodyDeviceInfo = ({brand, product, model, business}) => {
  return (
      <>
          <div role="textbox" className="cardSection deviceInfo">
              Fabricante: &nbsp;
              <p> {brand}</p>
          </div>
          <div role="textbox" className="cardSection deviceInfo">
              Producto: &nbsp;
              <p> {product}</p>
          </div>
          <div role="textbox" className="cardSection deviceInfo">
              Modelo: &nbsp;
              <p> {model}</p>
          </div>
          <div role="textbox" className="cardSection deviceInfo bold">
              Scotia{business}
          </div>
      </>
  )
}

export default BodyDeviceInfo

BodyDeviceInfo.propTypes = {
    builder: PropTypes.string,
    product: PropTypes.string,
    model: PropTypes.string,
    scotia: PropTypes.string,
}