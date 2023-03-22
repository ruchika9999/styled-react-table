import React, { ReactNode } from 'react';

import { Tbody as Component } from './styles';

interface TbodyProps  {
  children: ReactNode;
};

export const Tbody: React.FC<TbodyProps> = ({ children }) => (
  <Component>{children}</Component>
);


