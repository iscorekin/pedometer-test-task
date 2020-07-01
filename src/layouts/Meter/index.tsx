import React from 'react';
import * as UI from './styles';
import MeterTable from '../../modules/Meter/Table';

const MeterLayout: React.FC = props => {

  return (
    <UI.MeterLayoutWrapper>
      <MeterTable />
    </UI.MeterLayoutWrapper>
  );
};

export default MeterLayout;