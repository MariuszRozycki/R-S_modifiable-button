import React from "react";

const styles = {
  listStyle: 'none',
  margin: '10px 0',
  padding: 0
}

function EmployeesList({ name, surname }) {
  return (
    <div>
      <ul style={styles}>
        <li>{name}</li>
        <li>{surname}</li>
      </ul>
    </div>
  )
}

export default EmployeesList;