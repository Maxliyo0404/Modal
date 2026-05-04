import { useState } from "react";
import "./Modal.css";
function ModalApp (){
    const [modal, setModL] = useState(false);
    return (
        <>
        <div className="container">
         <h1 className="title">Modal  Verbs</h1>
         <button className="btn" onClick={()=> setModL(true)}></button>
         </div>
        </>
    )
}
export default ModalApp;