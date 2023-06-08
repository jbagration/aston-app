import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AuthForm from '../components/AuthForm';
import { RootState } from '../types/types';

const SignIn = () => {
  const { email: user } = useSelector<RootState, any>((state) => state.user);

  if (user) {
    return <Navigate to='/' replace />;
  }

  return <AuthForm header='Sign In' type='signin' />;
};

export default SignIn;
