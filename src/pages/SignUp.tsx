import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AuthForm from '../components/AuthForm';
import { RootState } from '../types/types';

const SignUp = () => {
  const { email: user } = useSelector<RootState, any>((state) => state.user);

  return user ? <Navigate to='/' replace /> : <AuthForm header='Sign Up' type='signup' />;
};

export default SignUp;
