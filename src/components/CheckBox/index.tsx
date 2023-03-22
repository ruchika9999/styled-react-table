import React from 'react';

import {
  CheckboxContainer,
  CheckboxLabel,
  StyledCheckboxInput,
} from './styles';

interface CheckBoxProps {
  id: string;
  onSelectRow: (is: string) => void;
}

export const Checkbox: React.FC<CheckBoxProps> = ({ id, onSelectRow }) => {
  return (
    <CheckboxContainer>
      <StyledCheckboxInput
        type="checkbox"
        id={id}
        onClick={() => onSelectRow(id)}
      />
      <CheckboxLabel htmlFor={id} />
    </CheckboxContainer>
  );
};


