import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';

import { selectArticlesData, selectArticlesStatus } from '@store/articles/selectors';
import { FullPageLoading } from '@components';
import { Status } from '@constants';

import * as S from './style';

export default function ArticleContainer() {
  const { articleId } = useParams();
  const articles = useSelector(selectArticlesData);
  const articlesStatus = useSelector(selectArticlesStatus);
  const [article, setArticle] = useState({ background: '/png/news-1.png' });

  useEffect(() => {
    if (articles && articleId) {
      const article = articles.find((article) => article._id.includes(articleId));
      let background = '/png/news-1.png';
      if (article?.multimedia[0]?.url)
        background = `https://nytimes.com/${article.multimedia[0]?.url}`;

      setArticle(() => ({
        ...article,
        background
      }));
    }
  }, [articles, articleId]);

  return (
    <S.ArticleContainer>
      <S.Background background={article?.background}>
        <S.BackgroundImage />
      </S.Background>

      <Link to="/">
        <S.HeaderLogo>NEWS</S.HeaderLogo>
      </Link>

      {articlesStatus === Status.LOADING ? (
        <FullPageLoading />
      ) : (
        <>
          <S.Slogan>{article?.abstract}</S.Slogan>

          <S.News>
            <S.NewsContent>
              <S.NewsTitle>{article?.abstract}</S.NewsTitle>
              <S.NewsTitle>{article?.lead_paragraph}</S.NewsTitle>
              <S.NewsDate>{moment(article?.pub_date).startOf('day').fromNow()}</S.NewsDate>
            </S.NewsContent>
          </S.News>
        </>
      )}

      <Link to="/">
        <S.Back>Go Back</S.Back>
      </Link>
    </S.ArticleContainer>
  );
}

export { ArticleContainer };
