import React from "react";

import './Style/Form.css';

function Form({ children }) {
  return (
    <form className="Form">
      {children}
    </form>
  )

}

export default Form;