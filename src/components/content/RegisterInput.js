import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { register } from '../../utils/network-data';

function RegisterInput() {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const navigate = useNavigate();
  const regUser = async () => {
    if (password !== confirmPassword) {
      alert('Password and password confirm must be the same');
    } else {
      const { error } = await register({
        name: name,
        email: email,
        password: password,
      });
      if (!error) {
        navigate('/login');
      }
    }
  };

  return (
    <div className="login-input">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" className="logRegInput" value={name} onChange={onNameChange} />
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
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        className="logRegInput"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />
      <button type="button" id="logRegButton" onClick={regUser}>
        Register
      </button>
    </div>
  );
}

export default RegisterInput;
