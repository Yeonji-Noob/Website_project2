import { useState, useRef } from "react";
import { CheckBox } from ".";
// import {setBoxProps} from "./today-newjeans"
import { checkedItemHandlerProps } from "../today/today-newjeans"
import { ChangeEventHandler } from "react";

interface CheckBoxItemProps {
    idx: string;
    // handleClickChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // setBox: ({ checked }: setBoxProps) => void;
    name: string | undefined;
    checkedItemHandler: ({ id, checked }: checkedItemHandlerProps) => void;
}

export const CheckBoxItem = ({ idx, name, checkedItemHandler }: CheckBoxItemProps) => {


    const [notCheck, setChecked] = useState<boolean>(false);
    // const [checkInput, setCheckInput] = useState([]);


    const handleClick = () => {
        setChecked(!notCheck);
      }

      const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target as HTMLInputElement;
        setChecked(!notCheck);
        checkedItemHandler({ id: target.id, checked: target.checked });

      }
  

    const checkBoxDisplay = notCheck ? "block" : "none";


    const checkRef = useRef(null);

    // const allCheckHandler = () => setChecked(isAllChecked);

    // useEffect(() => allCheckHandler(), [isAllChecked]);

    return (
        <>
            <CheckBox values={idx} className="today-NewJeans_Check" style={{ display: checkBoxDisplay }} />
            {/* input의 checked에 true / false 값 부여 */}
            <input value={idx} ref={checkRef} name={name} id={idx} className="today-NewJeans_check_box" type="checkbox" onClick={handleClick} onChange={handleChange} checked={notCheck} />

        </>
    );

}