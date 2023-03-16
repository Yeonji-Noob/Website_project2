import React from "react";
import soribadalogo from "../assets/soribadalogo.svg"


const Header: React.FC = () => (

    <div className="header">
        <picture>
            <img className="header-logo" src={soribadalogo} alt="logo" />
        </picture>
    </div>

);

export default Header;