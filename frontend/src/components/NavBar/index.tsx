import React from "react";
import './style.css'
import logo from './logo.png'

function NavBar () {
    return (
        <div className="navBar">
            <img src={logo} alt="logo" className="logo"></img>
            <div className="links">
                <a className="link" href="/">Pokémons</a>
                <a className="link" href="advanced">Pesquisa</a>
                <a className="link" href="stats">Estatísticas</a>
            </div>
        </div>
    )
};

export default NavBar;