import styled from 'styled-components';

export const RadioContainer = styled.div`
  position: absolute;
  margin-left: -10px;
  margin-top: -5px;

  ${(props) => props.theme.tableStyle.breakpoints.mobile} {
    margin-top: -30px;
  }
`;

export const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
`;

export const RadioLabel = styled.label`
  border-radius: 9999px;
  cursor: pointer;
  position: relative;
  transition: all 0.5s;
  &:before,
  &:after {
    content: '';
    border-radius: 9999px;
    width: 28px;
    height: 28px;
    position: absolute;
    z-index: 1;
    ${(props) => props.theme.tableStyle.breakpoints.mobile} {
      width: 24px;
      height: 24px;
    }
  }

  &:before {
    background-color: ${(props) =>
      props.theme.tableStyle.colors.grayScaleLevelOne};
    border: 2px solid
      ${(props) => props.theme.tableStyle.colors.grayScaleLevelTwo};
    top: 4px;
    left: 10px;
    transition: all 0.5s;
  }

  &:after {
    background-color: ${(props) => props.theme.tableStyle.colors.light};
    top: 6px;
    left: 12px;
    transition: all 0.15s;
    transition-timing-function: ease-out;
  }

  &:hover {
    /* background-color: rgba(114, 86, 248, 0.1); */
  }
  &:hover:before {
    border: 2px solid ${(props) => props.theme.tableStyle.colors.primary};
  }
`;

export const StyledRadioInput = styled(RadioInput)`
  &:checked ~ ${RadioLabel}:before {
    background-color: ${(props) => props.theme.tableStyle.colors.primary};
    border: 2px solid ${(props) => props.theme.tableStyle.colors.primary};
  }

  &:checked ~ ${RadioLabel}:after {
    width: 20px;
    height: 20px;
    top: 10px;
    left: 16px;
    ${(props) => props.theme.tableStyle.breakpoints.mobile} {
      top: 10px;
      left: 16px;
      width: 16px;
      height: 16px;
    }
  }
`;
