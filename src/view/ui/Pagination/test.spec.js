import { render } from '@utils';

import { Pagination } from './';

describe('Pagination', () => {
  it('renders correctly', () => {
    const { queryByTestId } = render(<Pagination totalCount={10} />);

    expect(queryByTestId('pagination')).toBeTruthy();
  });

  it('should render page items correctly', async () => {
    const container = render(<Pagination itemsPerPage={10} totalCount={107} />);

    const pageItems = container.getAllByTestId('page-item');
    expect(pageItems).toHaveLength(8);
  });
});
