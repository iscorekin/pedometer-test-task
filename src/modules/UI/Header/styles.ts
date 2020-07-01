import styled from 'styled-components';
import { colors, shadow } from '../../../constants/styles';

export const HeaderWrapper = styled.div`
  width: calc(100% - 48px);
  padding: 16px 24px;
  background: ${colors.black};

  box-shadow: ${shadow};
`;

export const Link = styled.a`
  color: ${colors.white};
  text-decoration: none;

  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
`;
