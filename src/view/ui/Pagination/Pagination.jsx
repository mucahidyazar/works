import PropTypes from 'prop-types';

import { range } from '@utils';
import { usePagination } from '@hooks';

import * as S from './style';

const Pagination = ({
  defaultCurrent,
  itemsPerPage,
  totalCount,
  onChange,
  prevText,
  nextText,
  boundaryCount,
  siblingCount
}) => {
  const { changePage, currentPage, maxPage } = usePagination(
    defaultCurrent,
    itemsPerPage,
    totalCount
  );

  const handleChange = (page) => {
    changePage(page);
    onChange(page);
  };

  const next = () => handleChange(Math.min(currentPage + 1, maxPage));
  const prev = () => handleChange(Math.max(currentPage - 1, 1));

  const startPages = range(1, Math.min(boundaryCount, maxPage));
  const endPages = range(Math.max(maxPage - boundaryCount + 1, boundaryCount + 1), maxPage);

  const siblingsStart = Math.max(
    Math.min(currentPage - siblingCount, maxPage - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(currentPage + siblingCount, boundaryCount + siblingCount * 2 + 2),
    endPages[0] - 2
  );

  let startEllipsis = [];
  if (siblingsStart > boundaryCount + 2) {
    startEllipsis = ['...'];
  } else if (boundaryCount + 1 < maxPage - boundaryCount) {
    startEllipsis = [boundaryCount + 1];
  }

  let endEllipsis = [];
  if (siblingsEnd < maxPage - boundaryCount - 1) {
    endEllipsis = ['...'];
  } else if (maxPage - boundaryCount > boundaryCount) {
    endEllipsis = [maxPage - boundaryCount];
  }

  // itemList = [ 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10,]
  const itemList = [
    ...startPages,
    ...startEllipsis,
    ...range(siblingsStart, siblingsEnd),
    ...endEllipsis,
    ...endPages
  ];

  const items = itemList.map((item, index) =>
    typeof item === 'number' ? (
      <S.PageItem key={item}>
        <S.PageButton selected={currentPage === item} onClick={() => handleChange(item)}>
          {item}
        </S.PageButton>
      </S.PageItem>
    ) : (
      /* eslint-disable react/no-array-index-key */
      <S.Ellipsis key={`${index}-item`}>...</S.Ellipsis>
      /* eslint-enable react/no-array-index-key */
    )
  );

  return (
    <S.Wrapper data-testid="pagination">
      <S.Pagination>
        <S.PageItem>
          <S.PrevButton onClick={prev} disabled={currentPage === 1}>
            {prevText && <S.DirectionText>{prevText}</S.DirectionText>}
          </S.PrevButton>
        </S.PageItem>
        {items}
        <S.PageItem>
          <S.NextButton onClick={next} disabled={currentPage === maxPage}>
            {nextText && <S.DirectionText>{nextText}</S.DirectionText>}
          </S.NextButton>
        </S.PageItem>
      </S.Pagination>
    </S.Wrapper>
  );
};

Pagination.propTypes = {
  defaultCurrent: PropTypes.number,
  totalCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number,
  onChange: PropTypes.func,
  prevText: PropTypes.string,
  nextText: PropTypes.string,
  boundaryCount: PropTypes.number,
  siblingCount: PropTypes.number
};

Pagination.defaultProps = {
  defaultCurrent: 1,
  itemsPerPage: 10,
  onChange: () => {},
  prevText: 'Geri',
  nextText: 'İleri',
  boundaryCount: 1,
  siblingCount: 1
};

Pagination.S = S;

export default Pagination;
