import { useState } from "react";
import "./Modal.css";
function ModalApp (){
    const [modal, setModL] = useState(false);
    return (
        <>
        <div className="container">
         <h1 className="title">Modal  Verbs</h1>
         <button className="btn" onClick={()=> setModL(true)}>Open Modal</button>
         {
            modal && (
                <div className="box">
                    <h2 className="box-title">Modal Verbs List</h2>
                    <button className="box-btn" onClick={()=> setModL(false)}>Close</button>
                </div>
            )
         }
         </div>
        </>
    )
}
export default ModalApp;