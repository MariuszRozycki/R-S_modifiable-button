import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import './Button.css';

function Button({ label, bgColor = 'alizarin', color = 'clouds', icon }) {
  const colors = {
    alizarin: '#e74c3c',
    clouds: '#ecf0f1'
  }

  const styles = {
    backgroundColor: colors[bgColor],
    color: colors[color]
  }

  return (
    <div>
      <button className="Button" style={styles}>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        {label}</button>
    </div>
  );
}

// Button.defaultProps = {
//   bgColor: {
//     backgroundColor: '#e74c3c'
//   },
//   color: {
//     color: '#ecf0f1'
//   }
// }

export default Button;