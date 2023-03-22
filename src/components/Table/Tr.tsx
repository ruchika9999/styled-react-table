import React, { ReactNode } from 'react';

import { Tr as Component } from './styles';

interface TrProps {
  children: ReactNode;
  isSelected?: boolean;
  id?: string;
}

export const Tr: React.FC<TrProps> = ({ children, isSelected, id }) => {
  return (
    <Component id={id} isSelected={isSelected || false}>
      {children}
    </Component>
  );
};

export default Tr;
