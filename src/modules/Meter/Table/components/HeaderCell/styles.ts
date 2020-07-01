import styled, { css } from 'styled-components';

interface IHeaderCellStyles {
  active?: boolean;
  reverse?: boolean;
}

export const HeaderCellWrapper = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: white;

  display: flex;
  align-items: center;

  user-select: none;
  cursor: pointer;
`;

export const SortIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 8px;

  opacity: 0.5;

  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

  ${(props: IHeaderCellStyles) => css`
    ${props.reverse && css`transform: rotate(180deg);`}
    ${props.active && css`opacity: 1;`}
  `}
`;