import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AuthForm from '../components/AuthForm';
import { RootState } from '../types/types';

const SignUp = () => {
  const { email: user } = useSelector<RootState, { email: string }>((state) => state.user);

  if (user) {
    return <Navigate to='/' replace />;
  }

  return <AuthForm header='Sign Up' type='signup' />;
};

export default SignUp;
