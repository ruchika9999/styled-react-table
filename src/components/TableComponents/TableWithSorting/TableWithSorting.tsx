import React, { useState } from 'react';

import { Table, Tbody, Td, Th, Thead, Tr } from '../../Table';
import { TextAlign } from '../../Table/type';

export interface Operations {
  id: string;
  operator: string;
  headsetDisplay: string;
  availability: string;
  [key: string]: string; // add an index signature to allow string indexing
}

export interface TablePropsType {
  tableData: Operations[];
}

const TableWithSorting: React.FC<TablePropsType> = (props) => {
  const [sortColumn, setSortColumn] = useState<number | null>(null);
  const [sortAscending, setSortAscending] = useState<boolean>(true);

  const { tableData } = props;

  const handleSort = (columnIndex: number) => {
    if (sortColumn === columnIndex) {
      setSortAscending(!sortAscending);
    } else {
      setSortColumn(columnIndex);
      setSortAscending(true);
    }
  };

  const sortedUsersData = sortColumn
    ? tableData.sort((a, b) => {
        const aValue = a[Object.keys(a)[sortColumn]];
        const bValue = b[Object.keys(b)[sortColumn]];
        return sortAscending
          ? aValue > bValue
            ? 1
            : -1
          : aValue < bValue
          ? 1
          : -1;
      })
    : tableData;

  return (
    <Table>
      <Thead>
        <Tr>
          <Th handleSort={() => handleSort(1)} textAlign={TextAlign.START}>
            Operator
          </Th>
          <Th textAlign={TextAlign.START}>Headset Display</Th>
          <Th textAlign={TextAlign.START}>3G Availability</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedUsersData.map((company: Operations) => (
          <Tr key={company.id}>
            <Td firstColumn>{company.operator}</Td>
            <Td>{company.headsetDisplay}</Td>
            <Td lastColumn>{company.availability}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableWithSorting;
