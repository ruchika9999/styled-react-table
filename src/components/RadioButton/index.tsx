import React from 'react';

import { RadioContainer, RadioLabel, StyledRadioInput } from './styles';

interface RadioProps {
  id: string;
  onSelectRow: (id: string) => void;
  selectedRowId: string;
}

export const Radio: React.FC<RadioProps> = ({ id, onSelectRow, selectedRowId }) => {
  return (
    <RadioContainer>
      <StyledRadioInput
        type="radio"
        id={id}
        onClick={() => onSelectRow(id)}
        checked={selectedRowId === id}
      />
      <RadioLabel htmlFor={id} className="myradio__label" />
    </RadioContainer>
  );
};

