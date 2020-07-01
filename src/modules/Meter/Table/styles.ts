import styled from 'styled-components';
import { colors, shadow } from '../../../constants/styles';

interface ITableStyles {
  rows?: number;
}

export const TableWrapper = styled.div`
  width: 335px;
  box-shadow: ${shadow};
`;

export const Table = styled.div`
  display: grid;
  grid-template-rows: repeat(${(props: ITableStyles) => props.rows}, 40px);
  max-height: 480px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.black};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.red};
  }
`;

export const TableHeaderRow = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: ${colors.black};
`;

export const TableRow = styled.div`
  width: calc(100% - 32px);
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  background: ${colors.white};

  :nth-child(even) {
    background: ${colors.grey};
  }
`;

export const TableCell = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: ${colors.black};

  display: flex;
  align-items: center;
`;