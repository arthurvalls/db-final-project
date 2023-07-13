import React from "react";
import './style.css'
import logo from './logo.png'
import { useNavigate } from "react-router-dom";

function NavBar () {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
    };
    return (
        <div className="navBar">
            <img src={logo} alt="logo" className="logo" onClick={() => routeChange()}></img>
            <div className="links">
                <a className="link" href="/">Pokémons</a>
                {/* <a className="link" href="/advanced">Pesquisa</a> */}
                <a className="link" href="/stats">Estatísticas</a>
            </div>
        </div>
    )
};

export default NavBar;