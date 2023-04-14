// img import
import SoribadaLogo from "../../assets/__header/header-soribada_logo.png"

// component import
import { SettingButton } from "./header-setting_button";

// import ToggleButton from "../toggle"
import Login from "./login";
import ToggleButton from "component/__header/toggle";


import { useToggleStore } from '../__header/toggle';

/**
 * 
 * @returns header 컴포넌트
 */
const Header: React.FC = () => {


    const light = useToggleStore((state: { light: boolean }) => state.light);

    return (
        <div className="header" id={light ? 'light-mode' : 'dark-mode'}>

            <picture>
                <img className="header-logo" src={SoribadaLogo} alt="logo" id={light ? '' : 'dark-png'} />
            </picture>

            <div className="header-right">

                {/* 이거 컴포넌트도 분리하는게 좋겠다. */}
                <SettingButton/>
                <ToggleButton />
                <Login />
            </div>

        </div>


    );

};

export default Header;