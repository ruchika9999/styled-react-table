import React from 'react';

import { Table, Tbody, Td, Th, Thead, Tr } from '../../Table';
import { TextAlign } from '../../Table/type';

export interface Operations {
  id: string;
  operator: string;
  headsetDisplay: string;
  availability: string;
}

export interface TablePropsType {
  tableData: Operations[];
}

const headers = [
  {
    name: 'Operator',
    textAlign: TextAlign.START,
  },
  {
    name: 'Headset Display',
    textAlign: TextAlign.START,
  },
  {
    name: '3G Availability',
    textAlign: TextAlign.START,
  },
];

const DEfaultTable: React.FC<TablePropsType> = (props) => {
  const { tableData } = props;

  return (
    <Table>
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index} textAlign={header.textAlign}>
              {header.name}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {tableData.map((company: Operations) => (
          <Tr key={company.id} id={company.id}>
            <Td firstColumn>{company.operator}</Td>
            <Td>{company.headsetDisplay}</Td>
            <Td lastColumn>{company.availability}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default DEfaultTable;
