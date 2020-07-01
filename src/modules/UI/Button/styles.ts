import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { colors } from '../../../constants/styles';

interface IStyledButtonStyles {
  transparent?: boolean;
  styles?: FlattenSimpleInterpolation;
}

export const StyledButton = styled.button`
  border: none;
  outline: none;

  width: 100%;
  padding: 16px;
  background: ${colors.red};
  
  color: ${colors.white};
  font-size: 14px;

  cursor: pointer;

  ${(props: IStyledButtonStyles) => props.transparent && css`
    background: transparent;
    border: 1px solid ${colors.black};
    color: ${colors.black};
  `}

  ${(props: IStyledButtonStyles) => props.styles}
`;