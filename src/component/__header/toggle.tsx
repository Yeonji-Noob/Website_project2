import { useState } from "react";

/**
 * 
 * @returns header 맨 오른쪽에 있는 toggle switch의 state 변경 함수
 */
const ToggleButton: React.FC = () => {

    const [light, setDark] = useState<boolean>(true)

    return (
        <div className="toggle-container">
            <div className="toggle-bg" onClick={() => setDark(!light)}
                style={{ backgroundColor: light ? '#e9e9e9' : '#888888' }}>
                <button className="toggle-circle-button"
                    style={{ backgroundColor: light ? 'white' : 'black', marginLeft: light ? '-17px' : '17px', }} aria-labelledby="labeldiv"></button>
            </div>
        </div>
    );
};

export default ToggleButton;