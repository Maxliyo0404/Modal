import { useEffect, useState } from "react";
import "./UseEffektHooks.css";
 const Card = () => {
    const  [data, setData] = useState([]);
    useEffect (() =>{
        fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Students")
        .then(data => data.json())
        .then(data =>{
            setData(data);
        })
 
 },[] )
   
 return(
    <div>
        
    </div>
 )
}