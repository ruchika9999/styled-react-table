import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme as themeDefault } from './../utility/theme';

interface TableThemeProps {
  children: ReactNode;
  theme: any;
}

export const TableTheme: React.FC<TableThemeProps> = ({ children, theme }) => (
  <ThemeProvider theme={theme || themeDefault}>{children}</ThemeProvider>
);
