import { Helmet } from 'react-helmet';

import { ArticleContainer } from '@containers';

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Read the News</title>
        <meta name="description" content="Everything about News" />
      </Helmet>
      <ArticleContainer />;
    </>
  );
}
