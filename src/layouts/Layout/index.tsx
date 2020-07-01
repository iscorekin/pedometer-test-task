import React from 'react';
import * as UI from './styles';
import Header from '../../modules/UI/Header';

const Layout: React.FC = props => {
  const { children } = props;

  return <UI.LayoutWrapper>
    <Header />
    {children}
  </UI.LayoutWrapper>
};

export default Layout;