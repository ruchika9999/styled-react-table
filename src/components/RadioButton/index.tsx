import React from 'react';

import { RadioContainer, RadioLabel, StyledRadioInput } from './styles';

interface RadioProps {
  id: string;
  onSelectRow: (id: string) => void;
  selectedRowId: string;
}

export const Radio: React.FC<RadioProps> = ({ id, onSelectRow, selectedRowId }) => {

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectRow(event.target.value);
  };

  return (
    <RadioContainer data-testid={`radioBox-${id}`}>
      <StyledRadioInput
        type="radio"
        id={id}
        onChange={handleRadioChange}
        checked={selectedRowId === id}
        value={id}
        data-testid={`radioBox-input-${id}`}
      />
      <RadioLabel htmlFor={id} />
    </RadioContainer>
  );
};
