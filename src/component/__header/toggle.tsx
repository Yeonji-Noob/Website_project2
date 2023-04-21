import { create } from "zustand"


export interface ToggleStore {
    light: boolean;
    setDark: (value: boolean) => void;
}

// zustand store
export const useToggleStore = create<ToggleStore>(set => ({
    light: true, //초기값 설정
    setDark: value => set(()=>({light: value})), //상태업뎃
}));


/**
 * 
 * @returns header 맨 오른쪽에 있는 toggle switch의 state 변경 함수
 */
const ToggleButton = () => {

    // const [light, setDark] = useState<boolean>(true)

    const light = useToggleStore((state) => state.light);
    const setDark = useToggleStore((state) => state.setDark);

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