// img import
import SoribadaLogo from "../../assets/__header/header-soribada_logo.png"
import Setting from "../../assets/__header/header-setting.svg"

// component import
import ToggleButton from "./toggle"
import Login from "./login";



/**
 * 
 * @returns header 컴포넌트
 */
const Header: React.FC = () => {


    return (
        <div className="header">

            <picture>
                <img className="header-logo" src={SoribadaLogo} alt="logo" />
            </picture>
            <div className="header-right">
                <div className="setting-container">
                    <img className="setting" src={Setting} alt="setting-button" />
                </div>
                <ToggleButton />
                <Login />
            </div>

        </div>


    );

};

export default Header;