import React, { PropsWithChildren } from 'react';
import * as UI from './styles';
import { FlattenSimpleInterpolation } from 'styled-components';

interface IButtonProps {
  transparent?: boolean;
  styles?: FlattenSimpleInterpolation;
  onClick: () => void;
}

const Button: React.FC<PropsWithChildren<IButtonProps>> = props => {
  const { children, transparent, styles, onClick } = props;

  return <UI.StyledButton styles={styles} transparent={transparent} onClick={onClick}>{children}</UI.StyledButton>
};

export default Button;