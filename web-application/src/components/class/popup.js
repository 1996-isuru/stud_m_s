import React from "react";
import "./class.css";
const Popup = props => {
  return (
    <div className="popup-box" style={{ marginTop: 100}}>
      <div className="box" >
      <br/>
        <span onClick={props.handleClose} style={{marginLeft: 790}}>X</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;