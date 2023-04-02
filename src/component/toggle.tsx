import { useState } from "react";


const ToggleButton = () => {

    const [light, setDark] = useState<boolean>(true)

    return (
        <div className="toggle-container">
            <div className="toggle-bg" onClick={() => setDark(!light)}
                style={{ backgroundColor: light ? '#e9e9e9' : '#888888' }}>
                <button className="toggle-circle-button"
                    style={{ backgroundColor: light ? 'white' : 'black', marginLeft: light ? '-15px' : '15px', }}></button>
            </div>
        </div>
    );
};

export default ToggleButton;