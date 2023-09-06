import React, { useState } from "react";


import logo from "../../images/Frame 1000004410.png";
import './navbar.css';

function Navbar(){


    const [toggleBar, setToggleBar] = useState("off");

    function barToggle(){
        if(toggleBar==='off'){
            setToggleBar('on');
        }
        else if(toggleBar==='on'){
            setToggleBar('off');
        }
    }

    return (
        <div>
            <div className="navbar">
                <a href="/"><img className="logo" src={logo} alt="Edfling" /></a>
                <ul className="navbar_links">
                    <a href="/experts"><li>Experts</li></a>
                    <a href="/blogs"><li>Blog</li></a>
                    <a href="/foundersProgram"><li>Founders Program</li></a>
                    <a href="/edflingBuisness"><li>For Buisness</li></a>
                </ul>
                <div>
                    <a href="/login"><button className="login" title="Sign Out"><i class="fa-solid fa-right-from-bracket"></i></button></a>
                </div>
                <button className="option_bar" onClick={barToggle}><i className="fa-solid fa-bars"></i></button>
            </div>
            
            {
                toggleBar==='on' ? <>
                <div className="menuItem">
                    <a href="/experts">Experts</a>
                    <a href="/">Blog</a>
                    <a href="/">Founders Program</a>
                    <a href="/">For Buisness</a>
                </div>
                </>
                : 
                <></>

            }
        </div>
    )
}

export default Navbar;