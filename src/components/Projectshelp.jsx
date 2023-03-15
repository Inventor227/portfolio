import React from "react"

function educationhelp (props)
{
    return (
        <div>
      <h1>{props.heading}</h1>
      <p>
        <h5>{props.description}</h5>
        <h3>{props.technologyUsed}</h3>
        <h5>{props.timeframe}</h5>
      </p>
            </div>
    )
}
export default educationhelp 
