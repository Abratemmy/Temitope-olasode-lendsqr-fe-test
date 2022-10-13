import React from 'react'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup"  onClick={()=>props.setTrigger(false)}>
            <div className="popup-inner">
                <button className="close-btn" onClick={()=>props.setTrigger(false)}> X </button>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default Popup