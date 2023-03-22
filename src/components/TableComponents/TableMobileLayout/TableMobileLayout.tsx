import React from 'react';

import { Table, Tbody, Td, Th, Thead, Tr } from '../../Table';
import { TextAlign } from '../../Table/type';

export interface Country {
  id: string;
  country: string;
  mins: string;
  rate: string;
}

export type TablePropsType = {
  tableData: Country[];
};

const header = [
  {
    name: 'Destination',
    textAlign: TextAlign.START,
  },
  {
    name: 'Mins',
    textAlign: TextAlign.START,
  },
  {
    name: 'Rate/min',
    textAlign: TextAlign.FLEX_END,
  },
];

const TableMobileLayout: React.FC<TablePropsType> = (props) => {
  const { tableData } = props;

  return (
    <Table>
      <Thead>
        <Tr>
          {header.map((header, index) => (
            <Th key={index} textAlign={header.textAlign}>
              {header.name}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {tableData.map((country: Country) => (
          <Tr key={country.id}>
            <Td firstColumn>{country.country}</Td>
            <Td>{country.mins}</Td>
            <Td textAlign={TextAlign.END} lastColumn>
              {country.rate}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableMobileLayout;
