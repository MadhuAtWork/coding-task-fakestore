
    import React, { useState, useEffect } from 'react';
    function Pools (){
        
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
                            <span>{item.price}</span>
                            <div>
                                {item.title}</div>
                        </div>)}
                </div>
        
            )
}
export default Pools;