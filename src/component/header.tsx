import React from "react";
import soribadalogo from "../assets/soribadalogo.svg"


const Header: React.FC = () => (

    <div className="header">
        <picture>
            <img src={soribadalogo} alt="" />
        </picture>
    </div>

);

export default Header;