import { useState } from "react";

const ToggleButton = () => {

    const [color, setColor] = useState<boolean>(true)



    return (
        <div className="toggle-container">
            <div className="toggle-bg" onClick={() => setColor(!color)}>
                <button className="toggle-circle-button"
                    style={{ backgroundColor: color ? 'white' : 'black' }}></button>
            </div>
        </div>
    );
};

export default ToggleButton;