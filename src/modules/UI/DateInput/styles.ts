import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { colors } from '../../../constants/styles';

interface IInputStyles {
  styles?: FlattenSimpleInterpolation;
};

export const StyledDateInput = styled.input`
  outline: none;
  font-family: unset;

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

  ${(props: IInputStyles) => props.styles};
`;