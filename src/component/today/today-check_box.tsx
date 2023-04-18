import { useState, useRef } from "react";
import { CheckBox } from ".";

interface CheckBoxItemProps {
    idx: string;
    handleClickChange: (event: React.ChangeEvent<HTMLInputElement>) => void ; 
    checked: boolean;
}

export const CheckBoxItem = ({idx, handleClickChange, checked}:CheckBoxItemProps) => {


    const [notCheck, setChecked] = useState<boolean>(false);
    // const [checkInput, setCheckInput] = useState([]);

    const handleClick = () => {
        setChecked(!notCheck);
    }

    const checkBoxDisplay = notCheck ? "block" : "none";


    const checkRef = useRef(null)


    return (
        <>
            <CheckBox values={idx} className="today-NewJeans_Check" style={{ display: checkBoxDisplay }} onClick={handleClick}/>
            {/* input의 checked에 true / false 값 부여 */}
            <input value={idx} ref={checkRef} id = { notCheck? `${idx}` : undefined } className="today-NewJeans_check_box" type="checkbox" name="checkbox" onClick={handleClick} onChange={handleClickChange} checked={checked} />
        </>
    );

}