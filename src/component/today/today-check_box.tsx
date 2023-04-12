import { useState } from "react";

interface CheckBoxsProps {
    children: string;
    disabled: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // 이벤트 type 지정할때 기니까 항상 주의하기
}

const Checkbox = ({ children, disabled }: CheckBoxsProps) => {

    const [isChecked, setIsChecked] = useState(false)

    const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    }


    return (
        <label>
            <input type="checkbox"
                disabled={disabled}
                checked={isChecked}
                onChange={Change}
            />
            {children}
        </label>
    );

}

export default Checkbox;