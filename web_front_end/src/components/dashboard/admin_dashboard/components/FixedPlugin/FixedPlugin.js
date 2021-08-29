
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";



import Button from "../../components/CustomButtons/Button.js";


export default function FixedPlugin(props) {
  const handleClick = () => {
    props.handleFixedClick();
  };
  return (
    <div
      className={classnames("fixed-plugin", {
        "rtl-fixed-plugin": props.rtlActive,
      })}
    >
      <div id="fixedPluginClasses" className={props.fixedClasses}>
        <div onClick={handleClick}>
          <i className="fa fa-cog fa-2x" />
        </div>
        <ul className="dropdown-menu">
          <li className="header-title">M3K Auctions</li>
          
          <li className="button-container">
            <div className="button-container">
              <Button
                color="success"
                href="#"
                target="_blank"
                fullWidth
              >
                Questions
              </Button>
            </div>
          </li>
          <li className="button-container">
            <div className="button-container">
              <Button
                color="warning"
                href="#"
                target="_blank"
                fullWidth
              >
                Send message
              </Button>
            </div>
          </li>
          <li className="button-container">
            <Button
              color="info"
              fullWidth
              href="#"
              target="_blank"
            >
              Approve New Auctions
            </Button>
          </li>
          <li className="adjustments-line" />
        </ul>
      </div>
    </div>
  );
}

FixedPlugin.propTypes = {
  bgImage: PropTypes.string,
  handleFixedClick: PropTypes.func,
  rtlActive: PropTypes.bool,
  fixedClasses: PropTypes.string,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  handleColorClick: PropTypes.func,
  handleImageClick: PropTypes.func,
};
