import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { getArticles } from '@store/articles/slice';
import { selectArticlesData, selectArticlesStatus } from '@store/articles/selectors';
import { FullPageLoading } from '@components';
import { Status } from '@constants';

import * as S from './style';

export default function HomeContainer() {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticlesData);
  const articlesStatus = useSelector(selectArticlesStatus);
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [article, setArticle] = useState({ background: '/png/news-1.png' });

  useEffect(() => {
    if (typeof search === 'string') {
      const timer = setTimeout(() => {
        dispatch(getArticles({ query: search }));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [search]);

  useEffect(() => {
    dispatch(getArticles({}));
  }, []);

  const mouseEnterHandler = (article) => {
    setArticle(article);
  };

  const searchHandler = (e) => {
    const { value } = e.target;

    setSearch(value);
  };

  const paginationHandler = (page) => {
    setPage(page);
    dispatch(getArticles({ query: search || '', page }));
    window.scrollTo(0, 0);
  };

  const renderArticles = useMemo(
    () =>
      articles?.map((article) => {
        let image = '/png/news-1.png';
        const id = article._id.replace('nyt://article/', '').replace('nyt://video/', '');
        if (article.multimedia[0]?.url) image = `https://nytimes.com/${article.multimedia[0]?.url}`;

        return (
          <S.News
            key={id}
            onMouseEnter={() => mouseEnterHandler({ ...article, background: image })}
          >
            <Link to={`/${id}`}>
              <LazyLoadImage
                src={image}
                alt={image}
                width="100%"
                height={240}
                delayMethod="debounce"
                effect="blur"
                delayTime={1000}
              />
              <S.NewsContent>
                <S.NewsTitle>{article?.abstract}</S.NewsTitle>
                <S.NewsDate>{moment(article?.pub_date).startOf('day').fromNow()}</S.NewsDate>
              </S.NewsContent>
            </Link>
          </S.News>
        );
      }),
    [articles]
  );

  return (
    <S.HomeContainer>
      {articlesStatus === Status.LOADING && <FullPageLoading />}
      <S.Background background={article.background}>
        <S.BackgroundImage />
      </S.Background>
      <S.Header>
        <Link to="/">
          <S.HeaderLogo>NEWS</S.HeaderLogo>
        </Link>

        <S.NewsSearch>
          <S.NewsSearchInput placeholder="Search" onChange={searchHandler} />
        </S.NewsSearch>
      </S.Header>

      <S.Slogan>{article?.abstract}</S.Slogan>

      <S.NewsList>{renderArticles}</S.NewsList>
      <S.PaginationWrapper>
        <S.Pagination
          defaultCurrent={page}
          totalCount={1000}
          itemsPerPage={10}
          prevText="Prev"
          nextText="Next"
          onChange={paginationHandler}
          boundaryCount={1}
          siblingCount={1}
        />
      </S.PaginationWrapper>
    </S.HomeContainer>
  );
}

export { HomeContainer };
