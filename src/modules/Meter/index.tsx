import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IReduxState } from '../../store/modules';
import { requestMeterData } from '../../store/modules/meter';

const Meter: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, hasError } = useSelector((state: IReduxState) => state.meter);

  useEffect(() => {
    if (!loading && !hasError && data.length === 0)
    dispatch(requestMeterData());
  })

  return <div>asdsadasda</div>
};

export default Meter;