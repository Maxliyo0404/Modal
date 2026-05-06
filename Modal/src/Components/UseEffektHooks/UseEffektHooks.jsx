import { useEffect, useState } from "react";
import "./UseEffektHooks.css";

const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Students")
            .then(res => res.json()) 
            .then(resData => {
                setData(resData);
            })

    }, []);

    return (
        <div>
          
                {data.map((el) => (
                    <div className="div" key={el.id}>
                        <img src={el.avatar} alt={el.name} />
                        <h1>{el.name}</h1>
                    </div>
                ))
           
            }
        </div>
    );
};

export default Card;