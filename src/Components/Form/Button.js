import React from "react";

import Colors from "./Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import './Style/Button.css'

function Button({ label, bgColor = 'alizarin', color = 'clouds', icon }) {

  const styles = {
    backgroundColor: Colors[bgColor],
    color: Colors[color]
  }

  return (
    <div>
      <button className="Button" style={styles}>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        {label}</button>
    </div>
  );
}

export default Button;