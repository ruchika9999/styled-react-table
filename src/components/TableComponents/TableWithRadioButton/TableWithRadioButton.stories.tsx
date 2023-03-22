import React from 'react';

import TableWithRadioButton from './TableWithRadioButton';

const operations = [
  {
    id: '123456789012345',
    name: 'John Smith',
    mobile: '555-555-5555',
    company: 'Acme Corporation',
    expiry: 'Jun 2024',
    penalty: '$250',
  },
  {
    id: '234567890123456',
    name: 'Jane Doe',
    mobile: '555-123-4567',
    company: 'Globex Industries',

    expiry: 'Mar 2023',
    penalty: '$100',
  },
  {
    id: '345678901234567',
    name: 'Bob Johnson',
    mobile: '555-987-6543',
    company: 'Initech, Inc.',
    expiry: 'Aug 2023',
    penalty: '$150',
  },
  {
    id: '456789012345678',
    name: 'Emily Nguyen',
    mobile: '555-456-7890',
    company: 'Apex Co.',

    expiry: 'Nov 2022',
    penalty: '$50',
  },
  {
    id: '567890123456789',
    name: 'Mike Davis',
    mobile: '555-111-2222',
    company: 'Zenith Corp.',

    expiry: 'Jan 2025',
    penalty: '$500',
  },
  {
    id: '678901234567890',
    name: 'Amy Lee',
    mobile: '555-222-3333',
    company: 'Acme Corporation',

    expiry: 'Apr 2024',
    penalty: '$200',
  },
  {
    id: '789012345678901',
    name: 'Alex Rodriguez',
    mobile: '555-777-8888',
    company: 'Globex Industries',

    expiry: 'Dec 2022',
    penalty: '$75',
  },
  {
    id: '890123456789012',
    name: 'Sarah Kim',
    mobile: '555-444-5555',
    company: 'Initech, Inc.',

    expiry: 'Jul 2023',
    penalty: '$125',
  },
  {
    id: '901234567890123',
    name: 'Chris Brown',
    mobile: '555-888-9999',
    company: 'Apex Co.',

    expiry: 'Sep 2022',
    penalty: '$25',
  },
  {
    id: '012345678901234',
    name: 'Julia Hernandez',
    mobile: '555-333-4444',
    company: 'Zenith Corp.',

    expiry: 'Feb 2025',
    penalty: '$750',
  },
];

export default {
  title: 'Tables/TableWithRadioButton',
  component: TableWithRadioButton,
  argTypes: {
    tableData: operations,
  },
};

export const Template = () => (
  <TableWithRadioButton
    handleSelected={(v) => console.log('selected value', v)}
    tableData={operations}
  />
);

// export const TableWithRadioButton = Template.bind({});

// TableWithRadioButton.args = {
//   tableData: operations,
//   selectionType: TableSelectType.SINGLE,
//   handleSelected: (v) => console.log('selected value', v),
// };
