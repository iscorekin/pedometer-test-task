import React from 'react';
import * as UI from './styles';
import Meter from '../../modules/Meter';

const MeterLayout: React.FC = props => {

  return (
    <UI.MeterLayoutWrapper>
      <Meter />
    </UI.MeterLayoutWrapper>
  );
};

export default MeterLayout;