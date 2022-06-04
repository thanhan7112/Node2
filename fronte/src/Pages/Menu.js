import './Menu.css'
import React, { useState } from "react";
import List from './ListMenu';
import { FaRegDotCircle } from "react-icons/fa";
import Footer from './Footer/Footer';
function Menu() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    return (
        <div className='MenuPage'>
            <div class="container" style={{marginLeft:'25rem'}}>
                <input onChange={inputHandler} type="text" placeholder="Search..." />
                <div class="search"></div>
            </div>

            <List input={inputText}></List>
            <Footer></Footer>
        </div>
    );
}

export default Menu;