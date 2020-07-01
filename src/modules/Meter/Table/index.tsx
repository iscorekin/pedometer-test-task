import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderBy } from 'lodash';
import moment from 'moment';
import { v4 } from 'uuid';
import * as UI from './styles';
import { IReduxState } from '../../../store/modules';
import { requestMeterData } from '../../../store/modules/meter';
import HeaderCell from './components/HeaderCell';
import pluralization from '../../../helpers/pluralization';
import AddModal from './components/AddModal';

type Sort = {
  key: 'date' | 'distance';
  asc: boolean;
};

const MeterTable: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, hasError } = useSelector(
    (state: IReduxState) => state.meter
  );

  const [sort, setSort] = useState<Sort>({ key: 'date', asc: true });
  const [distances, setDistances] = useState(data);

  useEffect(() => {
    if (!loading && !hasError && data.length === 0)
      dispatch(requestMeterData());
  });

  useEffect(() => {
    setDistances(
      orderBy(
        data,
        sort.key === 'date'
          ? (x) => moment(x[sort.key], 'DD.MM.YYYY').unix()
          : (x) => x[sort.key],
        sort.asc ? 'asc' : 'desc'
      )
    );
  }, [data, sort]);

  const handleSortClick = (key: 'date' | 'distance') => (asc: boolean) =>
    setSort({
      key,
      asc,
    });

  return (
    <UI.TableWrapper>
      <UI.TableHeaderRow>
        <HeaderCell
          asc={sort.asc}
          sortActive={sort.key === 'date'}
          onClick={handleSortClick('date')}
        >
          Дата
        </HeaderCell>
        <HeaderCell
          asc={sort.asc}
          sortActive={sort.key === 'distance'}
          onClick={handleSortClick('distance')}
        >
          Дистанция
        </HeaderCell>
      </UI.TableHeaderRow>
      <UI.Table rows={data.length}>
        {distances.map((row) => (
          <UI.TableRow key={v4()}>
            <UI.TableCell>{row.date}</UI.TableCell>
            <UI.TableCell>
              {row.distance}{' '}
              {pluralization(row.distance, 'метр', 'метра', 'метров')}
            </UI.TableCell>
          </UI.TableRow>
        ))}
      </UI.Table>
      <AddModal />
    </UI.TableWrapper>
  );
};

export default MeterTable;
