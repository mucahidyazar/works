import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Article from './pages/article';
import Home from './pages/home';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  const theme = useSelector((state) => state.main.theme);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/:articleId" element={<Article />} exact />
      </Routes>

      <GlobalStyle theme={theme} />
    </BrowserRouter>
  );
}

export default App;
