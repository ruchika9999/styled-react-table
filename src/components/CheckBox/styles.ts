import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  position: absolute;
  margin-top: -20px;
`;

export const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
  position: relative;
  user-select: none;
  transition: all 0.5s;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    width: 32px;
    height: 32px;
    border: 1px solid
      ${(props) => props.theme.tableStyle.colors.grayScaleLevelTwo};
    background-color: ${(props) => props.theme.tableStyle.colors.white};
    transition: all 0.5s;
    border-radius: 8px;

    ${(props) => props.theme.tableStyle.breakpoints.mobile} {
      width: 24px;
      height: 24px;
      top: 6px;
      border-radius: 4px;
    }
  }

  &:after {
    content: '';
    position: absolute;
    left: 9px;
    top: 13px;
    width: 0;
    height: 0;
    border: 2px solid transparent;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    transition: all 0.2s ease-out;
    ${(props) => props.theme.tableStyle.breakpoints.mobile} {
      top: 14px;
      left: 7px;
    }
  }

  &:hover:before {
    border-color: ${(props) => props.theme.tableStyle.colors.primary};
  }
`;

export const StyledCheckboxInput = styled(CheckboxInput)`
  &:checked ~ ${CheckboxLabel}:before {
    background-color: ${(props) => props.theme.tableStyle.colors.primary};
    border-color: ${(props) => props.theme.tableStyle.colors.primary};
  }

  &:checked ~ ${CheckboxLabel}:after {
    border-color: ${(props) => props.theme.tableStyle.colors.light};
    width: 14px;
    height: 7px;
    ${(props) => props.theme.tableStyle.breakpoints.mobile} {
      width: 10px;
      height: 5px;
    }
  }
`;
