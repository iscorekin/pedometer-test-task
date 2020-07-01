import React, { PropsWithChildren } from 'react';
import * as UI from './styles';
import sort from '../../../../../assets/icons/sort.svg';

interface IHeaderCellProps {
  sortActive: boolean;
  asc: boolean;
  onClick: (asc: boolean) => void;
}

const HeaderCell: React.FC<PropsWithChildren<IHeaderCellProps>> = (props) => {
  const { children, sortActive, asc, onClick } = props;

  const handleClick = () => {
    if (sortActive)
      onClick(!asc);
    else
      onClick(true);
  }

  return (
    <UI.HeaderCellWrapper onClick={handleClick}>
      {children}
      <UI.SortIcon src={sort} active={sortActive} reverse={sortActive ? !asc : false} />
    </UI.HeaderCellWrapper>
  );
};

export default HeaderCell;
