import { Helmet } from 'react-helmet';

import { HomeContainer } from '@containers';

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <meta name="description" content="Everything about News" />
      </Helmet>
      <HomeContainer />;
    </>
  );
}
