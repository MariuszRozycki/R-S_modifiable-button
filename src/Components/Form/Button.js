import React from "react";

import Colors from "./Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './Style/Button.css'

console.log(faUser);

function Button(props) {

  const {
    label,
    bgColor,
    color,
    icon
  } = props;

  const user = () => icon === 'user' ? faUser : 'User unknown';

  const styles = {
    backgroundColor: Colors[bgColor],
    color: Colors[color]
  }

  const iconStyles = {
    marginRight: 5
  }

  return (
    <div>
      <button className="Button" style={styles}>
        <FontAwesomeIcon style={iconStyles} icon={user()}></FontAwesomeIcon>
        {label}</button>
    </div>
  );
}

export default Button;