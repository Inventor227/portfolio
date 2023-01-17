import React from "react"

function educationhelp (props)
{
    return (
        <div>
        <h1>{props.heading}</h1>
 <p>
             <h3>{props.content}</h3>  
             <h4>{props.extracontent}</h4> 
             <h2>{props.time}</h2>
            </p>
            </div>
    )
}
export default educationhelp
