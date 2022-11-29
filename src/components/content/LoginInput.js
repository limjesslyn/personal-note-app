import useInput from '../../hooks/useInput';
import { login } from '../../utils/network-data';
import PropTypes from 'prop-types';

function LoginInput({ loginSuccess }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const logUser = async () => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <div className="login-input">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        className="logRegInput"
        value={email}
        onChange={onEmailChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        className="logRegInput"
        value={password}
        onChange={onPasswordChange}
      />
      <button id="logRegButton" type="button" onClick={logUser}>
        Login
      </button>
    </div>
  );
}

LoginInput.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginInput;
