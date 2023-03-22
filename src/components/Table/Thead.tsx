import React, { ReactNode } from 'react';

import { Thead as Component } from './styles';

interface PropsThead {
  children: ReactNode;
}

export const Thead: React.FC<PropsThead> = ({ children }) => {
  return <Component>{children}</Component>;
};
