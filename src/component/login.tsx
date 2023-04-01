import { ReactComponent as Profile } from '../assets/login.svg'

const Login = () => {
    return (
            <div className="login-container">
                <Profile id='profile' />
                <p>로그인</p>
            </div>

    );
};

export default Login;