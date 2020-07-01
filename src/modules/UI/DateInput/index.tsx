import React from 'react';
import * as UI from './styles';
import { FlattenSimpleInterpolation } from 'styled-components';

interface IDateInputProps {
  value?: string;
  onChange: (value: string) => void;
  styles?: FlattenSimpleInterpolation;
}

const DateInput: React.FC<IDateInputProps> = (props) => {
  const { value, styles, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <UI.StyledDateInput
      type="date"
      value={value}
      onChange={handleChange}
      styles={styles}
    />
  );
};

export default DateInput;
