import { render } from '@testing-library/react';
// import { ThemeProvider } from 'my-ui-lib';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const AllTheProviders = ({ children }) => <>{children}</>;
// return (
//   <ThemeProvider theme="light">
//     {children}
//   </ThemeProvider>
// );

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react';

// override render method
// eslint-disable-next-line import/export
export { customRender as render };

const getArticlesResponse = {
  status: 'OK',
  copyright: 'Copyright (c) 2022 The New York Times Company. All Rights Reserved.',
  response: {
    docs: [
      {
        abstract:
          'The California utility disclosed in a filing that securities regulators are looking into how it disclosed and accounted for losses from fires in recent years.',
        web_url:
          'https://www.nytimes.com/2019/05/02/business/energy-environment/pge-sec-investigation.html',
        multimedia: [
          {
            url: 'images/2019/05/02/multimedia/02xp-volcano1/e9bf228ca8b946aead42630ae48248d4-articleLarge.jpg'
          }
        ],
        pub_date: '2019-05-03T00:51:13+0000',
        _id: 'nyt://article/8f5ccd43-b06f-5081-8ed4-a645f8e29b68'
      }
    ]
  }
};

// Adding mock network response that is used in tests

const mockNetWorkResponse = ({ page = 1, query = '' }) => {
  const mock = new MockAdapter(axios);

  mock
    .onGet(
      `/articlesearch.json?page=${page}&q=${query}&fq=document_type:("article")&fl=_id&fl=web_url&fl=abstract&fl=multimedia&fl=pub_date&api-key=${
        import.meta.env.VITE_NYT_API_KEY
      }`
    )
    .reply(200, getArticlesResponse);
};

export { mockNetWorkResponse, getArticlesResponse };
