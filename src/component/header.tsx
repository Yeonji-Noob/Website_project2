import Soribadalogo from "../assets/soribadalogo.png"
import Setting from "../assets/setting.svg"
import ToggleButton from "../component/toggle"
import Login from "./login";

const Header: React.FC = () => {


    return (
        <div className="header">
            <picture>
                <img className="header-logo" src={Soribadalogo} alt="logo" />
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