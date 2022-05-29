import axios from "axios";
import React, { useState, useEffect, } from "react";
import '../Pages/Metamask/metamask.css'

function Sold() {
    const [solds, setSold] = useState([])

    const fetchSold = async () => {
        const { data } = await axios.get(
            "http://localhost:9000/meta"
        );
        const solds = data;
        setSold(solds);
        console.log(solds);
    };

    useEffect(() => {
        fetchSold();
    }, []);
    return (
        <div>
            <div className="Header" style={{ borderRadius: '5px', width: '99.8%', height: '200px', margin: '0 auto' }}>
                <a href="https://etherscan.io/" target="_blank"> <button className="btn"><p>Explore</p></button></a>
            </div>
            {solds.map((sold) => (
                <div key={sold.Name}>

                    {/* <h1 style={{color:'black'}}>{sold.hash}</h1> */}
                </div>
            ))}
        </div>
    )
}

export default Sold;