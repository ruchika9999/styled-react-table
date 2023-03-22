import styled from 'styled-components';

import { TextAlign } from './type';

export const Th = styled.th<{ width?: number }>`
  color: ${(props) => props.theme?.tableStyle?.colors?.fontColor};
  font-weight: 600;
  text-align: left;
  width: ${(props) => props.width + '%' ?? 'auto'};
  background-color: ${(props) => props.theme?.tableStyle?.colors?.tableHeader};
`;

export const ThBox = styled.div<{ textAlign: TextAlign }>`
  padding: 24px;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: ${(props) => props.textAlign ?? TextAlign.START};
  ${(props) => props.theme.tableStyle.breakpoints.mobile} {
    padding: 16px 16px;
  }
`;

export const SortButton = styled.button<{ requiredSpace: number }>`
  all: unset;
  width: 52px;
  height: 52px;
  border-radius: 50px;
  position: absolute;
  left: ${(props) => props.requiredSpace + 25 + 'px'};
  bottom: 8px;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  transition: all 0.5s ease-out;
  ${(props) => props.theme.tableStyle.breakpoints.mobile} {
    top: -2px;
  }
  &: hover {
    background-color: ${(props) =>
      props.theme.tableStyle.colors.primaryColorScaleTwo};
  }
`;
