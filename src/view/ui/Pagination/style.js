import styled, { css } from 'styled-components';

const Wrapper = styled.nav`
  width: 100%;
`;

const Pagination = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const PageButton = styled.a`
  display: flex;
  padding: 8px;
  min-width: 20px;
  color: var(--color-white);
  font-weight: 600;
  line-height: 16px;
  vertical-align: middle;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
  justify-content: center;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      pointer-events: none;
      opacity: 0.3;
    `};

  ${({ selected }) =>
    selected &&
    css`
      background-color: var(--color-primary);
      color: #fff;
      border-radius: 2px;
    `};

  ${({ selected }) =>
    !selected &&
    css`
      &:hover {
        color: var(--color-primary);
      }
    `};
`;

const PageItem = styled.li`
  flex: 1;

  &:first-child,
  &:last-child {
    flex: 0;
  }

  &:first-child {
    margin-right: auto;
    padding-left: 0;

    ${PageButton} {
      padding-left: 0;
    }
  }

  &:last-child {
    margin-left: auto;
    padding-right: 0;

    ${PageButton} {
      padding-right: 0;
    }
  }
`;

const PrevButton = styled(PageButton)``;
const NextButton = styled(PageButton)``;

const DirectionText = styled.span`
  font-weight: 600;
  line-height: 30px;
`;

const Ellipsis = styled.li`
  position: relative;
  bottom: 4px;
  font-size: 16px;
  line-height: 30px;
  color: #697488;
`;

export {
  Wrapper,
  Pagination,
  PageItem,
  PageButton,
  PrevButton,
  NextButton,
  DirectionText,
  Ellipsis
};
