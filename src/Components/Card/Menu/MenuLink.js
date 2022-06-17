import React from "react";

function MenuLink({ to, label, isActive }) {
  if (isActive) {
    const styles = {
      color: 'red'
    }

    return (
      <>
        <ul><a href={to} style={styles} >{label}</a></ul>
      </>
    );
  }

  return (
    <ul><a href={to} >{label}</a></ul>
  )
}

export default MenuLink;