import { useState } from "react";
import "./Modal.css";
function ModalApp (){
    const [modal, setModL] = useState(false);
    return (
        <>
        <div className="container">
         <h1 className="title">Modal  Verbs</h1>
         <button className="btn" onClick={()=> setModL(true)}></button>
         {
            modal && (
                <div className="box">
                    <h2 className="box-title">Modal List</h2>
                    <button className="box-btn" onClick={()=> setModL(false)}>Delete</button>
                </div>
            )
         }
         </div>
        </>
    )
}
export default ModalApp;