import React from "react";

function EmployeesDetails() {

  const styles = {
    listStyle: 'none',
    margin: '10px 0',
    padding: 0
  }

  return (
    <div>
      <ul style={styles}>
        <li>Detail 1</li>
        <li>Detail 2</li>
        <li>Detail 3</li>
      </ul>
    </div>
  )
}

export default EmployeesDetails;