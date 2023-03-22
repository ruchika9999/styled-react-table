import React, { useState } from 'react';

import { useScreenSize } from '../../../hooks/useScreenSize';
import { Table, TableColumn, Tbody, Td, Th, Thead, Tr } from '../../Table';
import { TextAlign } from '../../Table/type';
import { Radio } from './../../RadioButton';

export interface Users {
  id: string;
  name: string;
  mobile: string;
  expiry: string;
  penalty: string;
  company: string;
}
export interface TablePropsType {
  tableData: Users[];
  handleSelected: (data: Users) => void;
}

const defaultValue = {
  id: '',
  name: '',
  mobile: '',
  expiry: '',
  penalty: '',
  company: '',
};

const heading = [
  {
    name: 'Name',
    textAlign: TextAlign.START,
  },

  {
    name: 'Mobile',
    textAlign: TextAlign.START,
  },

  {
    name: 'Expiry',
    textAlign: TextAlign.START,
  },

  {
    name: 'Penalty',
    textAlign: TextAlign.START,
  },
];

const TableWithRadioButton: React.FC<TablePropsType> = (props) => {
  const [selectedRow, setSelectedRow] = useState<Users>(defaultValue);
  const { isMobileSize, isOnlyBigScreen } = useScreenSize();

  const { tableData, handleSelected } = props;

  const onSelectRow = (id: string) => {
    const [selectedValue] = tableData.filter((v) => v.id === id);
    setSelectedRow(selectedValue);
    handleSelected(selectedValue);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th width={isMobileSize ? 12 : 5} textAlign={TextAlign.START} />
          {isMobileSize && (
            <Th width={95} textAlign={TextAlign.START}>
              Contract details
            </Th>
          )}
          {isOnlyBigScreen &&
            heading.map((row) => (
              <Th textAlign={TextAlign.START}>{row.name}</Th>
            ))}
        </Tr>
      </Thead>
      <Tbody>
        {tableData.map((user: Users) => (
          <Tr key={user.id} isSelected={user.id === selectedRow.id}>
            <Td firstColumn isSelectableRow={true}>
              <Radio
                id={user.id}
                onSelectRow={onSelectRow}
                selectedRowId={selectedRow.id}
              />
            </Td>
            {isMobileSize && (
              <Td lastColumn>
                <div>
                  <TableColumn rowData={{ key: 'Name', value: user.name }} />
                  <TableColumn
                    rowData={{ key: 'Mobile', value: user.mobile }}
                  />
                  <TableColumn
                    rowData={{ key: 'Expiry', value: user.expiry }}
                  />
                  <TableColumn
                    rowData={{ key: 'Penalty', value: user.penalty }}
                  />
                </div>
              </Td>
            )}
            {isOnlyBigScreen && (
              <>
                <Td>{user.name}</Td>
                <Td>{user.mobile}</Td>
                <Td>{user.expiry}</Td>
                <Td lastColumn>{user.penalty}</Td>
              </>
            )}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableWithRadioButton;
