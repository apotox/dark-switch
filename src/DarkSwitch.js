import React from 'react';
import "./style.css"



const DarkSwitch = ({classSwitch,classHandle,onChange}) => {

    classSwitch  = classSwitch || "switch";
    classHandle = classHandle || "handle"

    return <span className={classSwitch}>
            <input type="checkbox" onChange={onChange}/>
            <span className={classHandle}></span>
    </span>
}


export default DarkSwitch