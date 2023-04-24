// component import
import { SettingButton, Login, ToggleButton } from './index';

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
                <img className="header-logo" src={`${process.env.PUBLIC_URL}/images/__header/header-soribada_logo.png`} alt="logo" id={light ? '' : 'dark-png'} />
            </picture>

            <div className="header-right">
                <SettingButton/>
                <ToggleButton />
                <Login />
            </div>

        </div>


    );

};

export default Header;