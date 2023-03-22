import React, { useState } from 'react';

import { Checkbox } from '../../CheckBox';
import { Table, Tbody, Td, Th, Thead, Tr } from '../../Table';
import { TextAlign } from '../../Table/type';

export interface Companies {
  id: string;
  brn: string;
  companyName: string;
}

export interface TablePropsType  {
  tableCaption?: string;
  tableData: Companies[];
  handleSelected: (data: Companies[]) => void;
};



const headers = [
  { name: 'BRN', textAlign: TextAlign.START, width: 15 },
  { name: 'Company Name', textAlign: TextAlign.START, width: 80 },
];

const TableWithCheckbox: React.FC<TablePropsType> = (props) => {
  const [selectedCheckBoxes, setCheckBoxSelect] = useState<Companies[]>([]);

  const getSelected = (rowId: string) =>
    selectedCheckBoxes.some((v) => v.id === rowId);

  const { tableData, handleSelected } = props;

  const onSelectRow = (id: string) => {
    const selectedRow = tableData.filter((v) => v.id === id);

    if (getSelected(id)) {
      setCheckBoxSelect((state) => state.filter((v) => v.id !== id));
      handleSelected(selectedCheckBoxes.filter((v) => v.id !== id));
    } else {
      setCheckBoxSelect((state) => [...state, ...selectedRow]);
      handleSelected([...selectedCheckBoxes, ...selectedRow]);
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th width={5} />
          {headers.map((header, index) => (
            <Th key={index} textAlign={header.textAlign} width={header.width}>
              {header.name}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {tableData.map((company: Companies) => (
          <Tr key={company.id} isSelected={getSelected(company.id)}>
            <Td firstColumn>
              <Checkbox id={company.id || ''} onSelectRow={onSelectRow} />
            </Td>
            <Td>{company.brn}</Td>
            <Td lastColumn>{company.companyName}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableWithCheckbox;
