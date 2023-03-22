import React from 'react';

import TableMobileLayout from './TableMobileLayout';

const operations = [
  { id: '534534543534545', country: 'Bangladesh', mins: '240', rate: '$0.03' },
  { id: '534534543534541', country: 'India', mins: '120', rate: '$0.02' },
  { id: '534534543534544', country: 'USA', mins: '360', rate: '$0.05' },
  { id: '534534543534546', country: 'China', mins: '480', rate: '$0.01' },
  { id: '534534543534547', country: 'Japan', mins: '180', rate: '$0.06' },
  { id: '534534543534444', country: 'Brazil', mins: '300', rate: '$0.04' },
  { id: '534534541111111', country: 'Russia', mins: '420', rate: '$0.02' },
  { id: '534534343434343', country: 'Canada', mins: '240', rate: '$0.07' },
  { id: '534534543533333', country: 'Australia', mins: '180', rate: '$0.08' },
  { id: '534534535453545', country: 'Germany', mins: '300', rate: '$0.04' },
];

export default {
  title: 'Tables/TableMobileLayoutTwo',
  component: TableMobileLayout,
  argTypes: {
    tableData: operations,
  },
};

export const Template = () => <TableMobileLayout tableData={operations}/>;



