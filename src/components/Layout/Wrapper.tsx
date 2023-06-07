import React from 'react';
import { Props } from '../../types/types';

const Wrapper: React.FC<Props> = ({ children }) => (
  <div className='wrapper'>{children}</div>
);

export default Wrapper;