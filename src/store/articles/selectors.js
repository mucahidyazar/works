export const selectArticles = (state) => state.articles;
export const selectArticlesData = (state) => selectArticles(state)?.data?.docs;
export const selectArticlesMeta = (state) => selectArticles(state)?.data?.meta;
export const selectArticlesStatus = (state) => selectArticles(state).status;
export const selectArticlesError = (state) => selectArticles(state).error;
