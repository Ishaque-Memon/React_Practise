import React from 'react'

function Alert(props) {

    const capitalized = (lower) =>{
    
     return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {capitalized(props.alert.msg)}
    </div>

  )
}

export default Alert
