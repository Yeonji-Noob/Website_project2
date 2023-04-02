import { ReactComponent as Profile } from '../assets/login.svg'
import { ReactComponent as LoginChevron } from "../assets/login_chevron.svg"

const Login = () => {
    return (
        <div className="login-container">
            <Profile id='profile' />
            <p>로그인</p>
            <LoginChevron id='login-chevron' />
        </div>

    );
};

export default Login;