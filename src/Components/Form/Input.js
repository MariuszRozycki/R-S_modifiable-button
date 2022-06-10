import React, { Fragment, useState } from "react";

import Colors from "./Colors";

function Input(props) {

  const {
    bgColor = 'clouds',
    color = 'wetAsphalt',
    borderSize = 2,
    borderRadius = 5,
    borderColor = 'midnightBlue',
    marginLeft = 10,
    padding = 5
  } = props;

  const styles = {
    backgroundColor: Colors[bgColor],
    color: Colors[color],
    borderSize: borderSize,
    borderRadius: borderRadius,
    borderColor: borderColor,
    marginLeft: marginLeft,
    padding: padding
  }
  // const nameLabel = name[0].toUpperCase() + name.slice(1);
  const [inputVal, setInputVal] = useState('');

  return (
    <Fragment>
      <label>Name</label>
      <input
        style={styles}
        type="text"
        required
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </Fragment>
  )
}

export default Input;