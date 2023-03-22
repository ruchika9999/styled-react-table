import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme as themeDefault } from './../utility/theme';
import { Table as Component } from './table.styles';
import { ThemeType } from './type';

interface TableProps {
  children: ReactNode;
  theme?: ThemeType;
}

export const Table: React.FC<TableProps> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme || themeDefault}>
      <Component cellSpacing="0" cellPadding="0">
        {children}
      </Component>
    </ThemeProvider>
  );
};
