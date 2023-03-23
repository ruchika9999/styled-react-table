import { ComponentStory } from '@storybook/react';
import React from 'react';

import TableWithCheckbox from './TableWithCheckbox';

const operations = [
  {
    id: 'wwerew23423q4234234324',
    brn: '198702333K',
    companyName: 'Blue Ocean International',
  },
  {
    id: 'sdfdsf43534fdfgdfg345',
    brn: '198702444L',
    companyName: 'Red Sky Enterprises',
  },
  {
    id: 'jhgjhg56756hjghjh678',
    brn: '198702555M',
    companyName:
      'Yellow Sun Corporation Yellow Sun Corporation Yellow Sun Corporation',
  },
  {
    id: 'zxcxzcx98989zxczxc345',
    brn: '198702666N',
    companyName: 'Purple Moon Ltd.',
  },
  {
    id: 'asdasd12312asdasd345',
    brn: '198702777P',
    companyName: 'Pink Rose Industries',
  },
  {
    id: 'qweqwe45645qweqwe678',
    brn: '198702888Q',
    companyName: 'Orange Skyline Ventures',
  },
  {
    id: 'uiuiui78989uiuiui123',
    brn: '198702999R',
    companyName: 'Green Field Enterprises',
  },
  {
    id: 'lkjlkj09890lkjlkj234',
    brn: '198703000S',
    companyName: 'Brown Bear Corporation',
  },
  {
    id: 'mnbmnb45645mnbmnb567',
    brn: '198703111T',
    companyName: 'Silver Lake Holdings',
  },
  {
    id: 'poiopi12321poiopi789',
    brn: '198703222U',
    companyName: 'Golden Key Industries',
  },
];

export default {
  title: 'Tables/TableWithCheckbox',
  component: TableWithCheckbox,
  argTypes: {
    tableData: operations,
  },
};

const Template: ComponentStory<typeof TableWithCheckbox> = (args) => (
  <TableWithCheckbox {...args} />
);

export const Table = Template.bind({});

Table.args = {
  tableData: operations,
  handleSelected: (v) => console.log('selected values', v),
};
