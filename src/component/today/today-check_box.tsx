import { useState, useRef, useEffect } from 'react';
import { CheckBox } from '.';
import { checkedItemHandlerProps } from '../today/today-newjeans';
import { ChangeEventHandler } from 'react';


interface CheckBoxItemProps {
    idx: string;
    name: string | undefined;
    checkedItemHandler: ({ id, checked }: checkedItemHandlerProps) => void;
    allCheckedItems: boolean;
}


export const CheckBoxItem = ({ idx, name, checkedItemHandler, allCheckedItems }: CheckBoxItemProps) => {

    //개별 체크박스의 상태 관리 
    const [notCheck, setChecked] = useState<boolean>(false);
    // const [checkInput, setCheckInput] = useState([]);

    //체크박스 누르면 상태 변화
    const handleClick = () => {
        setChecked(!notCheck);
      }

    //   
      const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const target = event.target as HTMLInputElement;
        handleClick();
        checkedItemHandler({ id: target.id, checked: target.checked });

      }
  

    const checkBoxDisplay = notCheck ? "block" : "none";

    //   console.log(checkBoxDisplay);
    const checkRef = useRef(null);


    // 전체 체크를 위함

    useEffect(() =>{ 
      const allCheckHandler = () => setChecked(allCheckedItems);
      allCheckHandler()}, [allCheckedItems]);

    
    return (
        <>
            <CheckBox values={idx} className="today-NewJeans_Check" style={{ display: checkBoxDisplay }} />
            {/* input의 checked에 true / false 값 부여 */}
            <input value={idx} ref={checkRef} name={name} id={idx} className="today-NewJeans_check_box" type="checkbox" onClick={handleClick} onChange={handleChange} checked={notCheck} />

        </>
    );

}