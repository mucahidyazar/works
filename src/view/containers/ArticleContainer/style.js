import styled from 'styled-components';

import { Button } from '@ui';
import { css } from 'styled-components';

const ArticleContainer = styled.div`
  width: 1024px;
  height: 100vh;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  ${({ background }) =>
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
    0deg,
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
`;

const NewsSearch = styled.div`
  width: 400px;
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
`;
const NewsContent = styled.div`
  text-align: center;
`;
const NewsTitle = styled.h2`
  font-size: var(--font-size);
  margin-bottom: 4px;
`;
const NewsDate = styled.p`
  color: var(--color-gray-dark);
  font-size: var(--font-size-xs);
  margin-bottom: 40px;
`;

const Back = styled(Button)`
  width: 280px;
`;

export {
  ArticleContainer,
  Background,
  BackgroundImage,
  Header,
  HeaderLogo,
  NewsSearch,
  NewsSearchInput,
  Slogan,
  NewsList,
  News,
  NewsContent,
  NewsTitle,
  NewsDate,
  Back
};
