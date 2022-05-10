import './Menu.css'
import React, { useState } from "react";
import List from './ListMenu';
import { FaRegDotCircle } from "react-icons/fa";
function Menu() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    return (
        <div>
            <div className="search-box">
                <button className="btn-search"><FaRegDotCircle style={{color:'white'}} className="fas fa-search"></FaRegDotCircle></button>
                <input onChange={inputHandler} type="text" className="input-search" placeholder="Type to Search..." />
            </div>
            <List input={inputText}></List>
        </div>
    );
}

export default Menu;