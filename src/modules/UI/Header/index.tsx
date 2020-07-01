import React from 'react';
import * as UI from './styles';

const Header: React.FC = () => {
  return <UI.HeaderWrapper>
    <UI.Link href='/'>Шагомер на тестовое задание</UI.Link>
  </UI.HeaderWrapper>
};

export default Header;