import React, { Fragment, useState } from "react";

import Colors from "./Colors";

function Input(props) {

  const {
    name,
    bgColor,
    color,
    borderSize,
    borderRadius,
    borderColor,
    padding,
    margin
  } = props;

  const styles = {
    backgroundColor: Colors[bgColor],
    color: Colors[color],
    borderSize: borderSize,
    borderRadius: borderRadius,
    borderColor: borderColor,
    padding: padding,
    margin: margin,
    width: '100%'
  }
  const nameLabel = name[0].toUpperCase() + name.slice(1);
  const [inputVal, setInputVal] = useState('Write down your name');

  return (
    <Fragment>
      <label>{nameLabel}
        <input
          style={styles}
          type="text"
          required
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </label>
    </Fragment>
  )
}

export default Input;