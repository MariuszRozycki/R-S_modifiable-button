import React, { Fragment } from "react";

function CardHeader({ title }) {
  return (
    <Fragment>
      <header>
        <h1>{title}</h1>
      </header>
    </Fragment>
  )

}

export default CardHeader;