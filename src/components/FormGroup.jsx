import React, { Fragment } from "react"

export default function FormGroup({ children, errors }) {
  const isErrors = errors?.length > 0
  return (
    <div>
      <div className={` ${isErrors && "from_error"}  `}>{children}</div>
      {isErrors &&
        errors.map((error, i) => {
          return (
            <Fragment key={i}>
              <span className="error">{error}</span> <br />
            </Fragment>
          )
        })}
    </div>
  )
}
