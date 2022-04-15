import styled, { css } from 'styled-components';

import { Pagination as StyledPagination } from '@ui';
import { Breakpoint } from '@constants';

const HomeContainer = styled.div`
  padding: 40px 0;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  ${({ background = '/png/news-1.png' }) =>
    background &&
    css`
      background: url(${background}) 50% 50% no-repeat;
      background-size: cover;
    `}
`;
const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 0.8) 60%,
    rgba(0, 0, 0, 0.2) 100%
  );
`;
const Header = styled.header`
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${Breakpoint.MOBILE.MAX}px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const HeaderLogo = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  color: var(--color-primary);
`;

const Slogan = styled.h1`
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-gray-dark);
  font-size: var(--font-size-xl);
  text-align: center;
  padding: 160px 0;
`;

const NewsSearch = styled.div`
  width: 400px;

  @media (max-width: ${Breakpoint.MOBILE.MAX}px) {
    width: 100%;
  }
`;
const NewsSearchInput = styled.input`
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--color-white);
  padding: 4px 0;
  color: var(--color-white);
  width: 100%;

  &::placeholder {
    color: var(--color-gray-dark);
  }
`;

const NewsList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
`;
const News = styled.article`
  width: 100%;
  color: var(--color-white);
  transition: all 0.3s ease;
  margin-bottom: 4px;
  cursor: pointer;

  &:hover {
    outline: 1px solid var(--color-primary);
    outline-offset: 6px;
  }
`;
const NewsImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  margin-bottom: 4px;
  border-radius: 2px;
`;
const NewsContent = styled.div``;
const NewsTitle = styled.h2`
  font-size: var(--font-size);
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    text-decoration: underline;
  }
`;
const NewsDate = styled.p`
  color: var(--color-gray-dark);
  font-size: var(--font-size-xs);
`;

const PaginationWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 40px 0;

  @media (max-width: ${Breakpoint.MOBILE.MAX}px) {
    width: 100%;
  }
`;
const Pagination = styled(StyledPagination)``;

export {
  HomeContainer,
  Background,
  BackgroundImage,
  Header,
  HeaderLogo,
  NewsSearch,
  NewsSearchInput,
  Slogan,
  NewsList,
  News,
  NewsImage,
  NewsContent,
  NewsTitle,
  NewsDate,
  PaginationWrapper,
  Pagination
};
