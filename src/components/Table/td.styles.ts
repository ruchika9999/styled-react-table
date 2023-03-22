import styled from 'styled-components';

import { TextAlign } from './type';

export const Td = styled.td`
  border-top: 1px solid
    ${(props) => props.theme.tableStyle.colors.tableBorderColor};
  position: relative;
  font-weight: 300;
`;

export const TdBox = styled.div<{ textAlign: TextAlign }>`
  padding: 24px 24px;
  text-align: ${(props) => props.textAlign ?? 'start'};
  ${(props) => props.theme.tableStyle.breakpoints.mobile} {
    padding: 8px 16px;
  }
`;

export const ForSelect = styled.div`
  padding: 24px 24px;
  color: ${(props) => props.theme.tableStyle.colors.light};
  ${(props) => props.theme.tableStyle.breakpoints.mobile} {
    padding: 8px 16px;
  }
`;

export const TdEdgeSpace = styled.div`
  height: 1px;
  width: 24px;
  background-color: ${(props) => props.theme.tableStyle.colors.light};
  position: absolute;
  top: -1px;
  z-index: 99;
  ${(props) => props.theme.tableStyle.breakpoints.mobile} {
    width: 16px;
  }
`;
