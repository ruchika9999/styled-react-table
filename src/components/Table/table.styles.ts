import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  height: 1px;
  border-spacing: 0;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-collapse: collapse;
  border: none;
  font-size: ${(props) => props.theme.tableStyle.fontSize.desktop};

  ${(props) => props.theme.tableStyle.breakpoints.desktop} {
    font-size: ${(props) => props.theme.tableStyle.fontSize.desktop};
  }
  ${(props) => props.theme.tableStyle.breakpoints.tablet} {
    font-size: ${(props) => props.theme.tableStyle.fontSize.tablet};
  }
  ${(props) => props.theme.tableStyle.breakpoints.mobile} {
    font-size: ${(props) => props.theme.tableStyle.fontSize.mobile};
  }

  & tr:first-child th:first-child {
    border-top-left-radius: 16px;
    ${(props) => props.theme.tableStyle.breakpoints.mobile} {
      border-top-left-radius: 8px;
    }
  }

  & tr:first-child th:last-child {
    border-top-right-radius: 16px;
    ${(props) => props.theme.tableStyle.breakpoints.mobile} {
      border-top-left-radius: 8px;
    }
  }

  & tr:last-child td:first-child {
    border-bottom-left-radius: 16px;
    ${(props) => props.theme.tableStyle.breakpoints.mobile} {
      border-bottom-left-radius: 8px;
    }
  }
  & tr:last-child td:last-child {
    border-bottom-right-radius: 16px;
    ${(props) => props.theme.tableStyle.breakpoints.mobile} {
      border-bottom-right-radius: 8px;
    }
  }
`;
