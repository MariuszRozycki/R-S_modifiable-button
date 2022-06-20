import React from "react";

function EmployeesWrapper({ children }) {

  const styles = {
    display: 'flex'
  }

  return (
    <div style={styles}>
      {children}
    </div>
  )
}

export default EmployeesWrapper;