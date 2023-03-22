import styled from 'styled-components';

export const TableWrap = styled.div`
  margin-top: 20px;
  padding: 0 5%;
`;

export const Thead = styled.thead`
  & tr {
    & th {
      background-color: ${(props) =>
          props.theme?.tableStyle.colors.tableHeader}
        ${(props) => props.theme.tableStyle.breakpoints.mobile} {
        padding: 0 16px;
      }
    }
  }
`;

export const Tr = styled.tr<{ isSelected: boolean }>`
  &:first-child {
    td {
      border-top: 0; // remove first row border
    }
  }
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.tableStyle.colors.primaryColorScaleOne
      : props.theme.tableStyle.colors.white};
`;

export const MobileHeading = styled.div`
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  min-width: 80px;
`;

export const MobileRow = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  padding: 0;
  min-width: 200px;
  letter-spacing: 0.002em;
`;

export const MobileRowContainer = styled.div`
  display: flex;
  flex-direction: 'row';
  margin: 8px 0;
  padding: 0;
`;

export const Tbody = styled.tbody``;
