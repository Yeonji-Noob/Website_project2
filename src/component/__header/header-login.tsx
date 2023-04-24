import { useToggleStore } from '../__header/toggle';
import { ReactComponent as Profile } from '../../assets/__header/header-login.svg'

export const Login: React.FC = () => {

    // chevron의 색 조절을 위해서 데려옴
    const light = useToggleStore((state: { light: boolean }) => state.light);

    return (
        <div className="login-container">
            <Profile id='profile' />
            <p>로그인</p>
            <svg id='login-chevron' width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.29866 0.392617L7.50671 5.60067L12.7148 0.392617C13.2383 -0.130872 14.0839 -0.130872 14.6074 0.392617C15.1309 0.916107 15.1309 1.76174 14.6074 2.28523L8.44631 8.44631C7.92282 8.9698 7.07718 8.9698 6.55369 8.44631L0.392617 2.28523C-0.130872 1.76174 -0.130872 0.916107 0.392617 0.392617C0.916107 -0.11745 1.77517 -0.130872 2.29866 0.392617Z" fill={light ? "#231EDC" : "#aff7d4"} />
            </svg>
        </div>

    );
};

