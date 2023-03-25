import Soribadalogo from "../assets/soribadalogo.png"
import Setting from "../assets/setting.svg"
import React, { useState } from 'react';
import Switch from "../component/switch";

const Header: React.FC = () => {

    const [checked, setChecked] = useState(false);

    return (
        <div className="header">
            
            <picture>
                <img className="header-logo" src={Soribadalogo} alt="logo" />
            </picture>

            <div className="header-right">
                <img className="setting" src={Setting} alt="" />
                <div className="toggle-button"></div>
            </div>
            <Switch checked={checked} checkedColor={'#EF476F'} onChange={() => setChecked(!checked)} />
        </div>
        

    );

};

export default Header;