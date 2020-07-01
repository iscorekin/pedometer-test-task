import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { colors } from '../../../constants/styles';

interface IInputStyles {
  styles?: FlattenSimpleInterpolation;
};

export const StyledNumberInput = styled.input`
  outline: none;
  width: calc(100% - 34px);
  padding: 12px 16px;
  border: 1px solid ${colors.grey};

  font-size: 14px;
  line-height: 16px;

  transition: border-color 0.2s ease-in-out;

  :hover,
  :focus {
    border-color: ${colors.red};
  }

  ::placeholder {
    font-size: 14px;
    line-height: 16px;
    color: ${colors.grey};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${(props: IInputStyles) => props.styles};
`;