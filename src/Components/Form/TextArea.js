import React, { Fragment, useState } from "react";

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

  const [textAreaVal, setTextAreaVal] = useState('Write down text');

  return (
    <Fragment>
      <label>
        <textarea
          style={styles}
          type="text"
          required
          value={textAreaVal}
          onChange={(e) => setTextAreaVal(e.target.value)}></textarea>
      </label>
    </Fragment>
  )
}

export default TextArea;