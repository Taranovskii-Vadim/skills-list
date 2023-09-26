import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { RootState } from 'src/store/types';
import { login } from 'src/store/auth/actions';

// TODO create beautiful form
const Login = () => {
  const location = useLocation();
  // TODO add generic to dispatch
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.auth);
  // TODO can include react hook form
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  if (data) {
    return <Navigate replace to="/" state={{ from: location }} />;
  }

  const handleSubmit = () => {
    if (loginRef.current && passwordRef.current) {
      dispatch(login({ login: loginRef.current.value, password: passwordRef.current.value }));
    }
  };

  return (
    <div>
      <input type="text" ref={loginRef} />
      <input type="text" ref={passwordRef} />
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
};

export default Login;
