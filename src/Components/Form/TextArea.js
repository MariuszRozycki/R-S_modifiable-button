import React, { Fragment } from "react";

import Colors from "./Colors";

function TextArea(props) {

  const { bgColor,
    color,
    borderSize,
    borderRadius,
    borderColor,
    padding } = props;

  const styles = {
    backgroundColor: Colors[bgColor],
    color: Colors[color],
    borderSize: borderSize,
    borderRadius: borderRadius,
    borderColor: borderColor,
    padding: padding,
    width: '100%'
  }
  return (
    <Fragment>
      <label>
        <textarea style={styles}></textarea>
      </label>
    </Fragment>
  )
}

export default TextArea;