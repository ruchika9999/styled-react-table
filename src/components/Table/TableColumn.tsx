import React from 'react';

import { MobileHeading, MobileRow, MobileRowContainer } from './styles';

interface TableColumnProps  {
  rowData: { key: string; value: string };
};

export const TableColumn: React.FC<TableColumnProps> = ({ rowData }) => {
  return (
    <MobileRowContainer>
      <MobileHeading>{rowData.key} : </MobileHeading>
      <MobileRow> {rowData.value}</MobileRow>
    </MobileRowContainer>
  );
};


