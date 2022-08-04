import React, { useState, useEffect } from 'react';



function Surfing() {
    const [data, getData] = useState([]);
    const URL = "https://fakestoreapi.com/products";
    
    useEffect(() => {
        fetchData()
    }, [])
        const fetchData = () => {
            fetch(URL)
                .then((res) =>
                    res.json())
     
                .then((response) => {
                    console.log(response);
                    getData(response);
                })
        }
    
    return (
        <div className="holderapi">
            {data.map((item) => 
                <div className="contentapi">
                    <h3>{item.title}</h3>
                    <img src={item.image}></img>
                 <idv><span>{item.price}</span></idv>   
                  <div><span>{item.category}</span></div>  
                    <div>
                        {item.title}</div>
                </div>)}
        </div>

    )
}
export default Surfing;