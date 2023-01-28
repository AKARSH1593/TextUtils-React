import React from 'react'

// props.alert && used below is similar to if else statement. means if left of && is true then the code will run, otherwise code will not run.   It means if props.alert is null then do nothing.
function Alert(props) {

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert
