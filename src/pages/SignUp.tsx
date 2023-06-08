import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AuthForm from '../components/AuthForm';
import { RootState } from '../types/types';

const SignUp = () => {
  const navigate = useNavigate();
  const { email: user } = useSelector<RootState, any>((state) => state.user);

  if (user) {
    return <Navigate to='/' replace />;
  }

  return <AuthForm header='Sign Up' type='signup' />;
};

export default SignUp;
