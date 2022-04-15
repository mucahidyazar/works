import { useState, useEffect } from 'react';

function usePagination(defaultCurrent, itemsPerPage, totalCount) {
  const [currentPage, setCurrentPage] = useState(defaultCurrent);
  const maxPage = totalCount > 0 ? Math.ceil(totalCount / itemsPerPage) : 1;

  const changePage = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  };

  useEffect(() => {
    setCurrentPage(defaultCurrent);
  }, [defaultCurrent]);

  return { changePage, currentPage, maxPage };
}

export { usePagination };
