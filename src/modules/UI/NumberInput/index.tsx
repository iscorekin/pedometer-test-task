import React from 'react';
import * as UI from './styles';
import { FlattenSimpleInterpolation } from 'styled-components';

interface INumberInputProps {
  value?: number;
  onChange: (value: number) => void;
  styles?: FlattenSimpleInterpolation;
}

const NumberInput: React.FC<INumberInputProps> = (props) => {
  const { value, styles, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(parseInt(e.target.value, 10));

  return (
    <UI.StyledNumberInput
      type="number"
      value={value}
      onChange={handleChange}
      styles={styles}
    />
  );
};

export default NumberInput;
