import { ComponentStory } from '@storybook/react';
import React from 'react';

import DefaultStoryTable from './DefaultTable';

const operations = [
  {
    id: '32434234234234324234',
    operator: '*Celcom Axiata (LTE)',
    headsetDisplay: 'CELCOM / My Celcom / 502 19',
    availability: 'No',
  },
  {
    id: '34567890123456789012',
    operator: 'Maxis Communications',
    headsetDisplay: 'Maxis / 502 12',
    availability: 'Yes',
  },
  {
    id: '45678901234567890123',
    operator: 'U Mobile Sdn Bhd',
    headsetDisplay: 'U Mobile / 502 18',
    availability: 'Yes',
  },
  {
    id: '56789012345678901234',
    operator: 'Tune Talk Sdn Bhd',
    headsetDisplay: 'Tune Talk / 502 11',
    availability: 'No',
  },
  {
    id: '67890123456789012345',
    operator: 'redONE Network Sdn Bhd',
    headsetDisplay: 'redONE / 502 16',
    availability: 'Yes',
  },
  {
    id: '78901234567890123456',
    operator: 'Yes 4G',
    headsetDisplay: 'Yes / 502 153',
    availability: 'Yes',
  },
  {
    id: '89012345678901234567',
    operator: 'Altel Communications Sdn Bhd',
    headsetDisplay: 'Altel / 502 155',
    availability: 'No',
  },
  {
    id: '90123456789012345678',
    operator: 'redONE Network (4G)',
    headsetDisplay: 'redONE / 502 19',
    availability: 'No',
  },
];

export default {
  title: 'Tables/BasicDesign',
  component: DefaultStoryTable,
  argTypes: {
    tableData: operations,
  },
};
const Template: ComponentStory<typeof DefaultStoryTable> = (args) => (
  <DefaultStoryTable {...args} />
);

export const Table = Template.bind({});

Table.args = {
  tableData: operations,
};
