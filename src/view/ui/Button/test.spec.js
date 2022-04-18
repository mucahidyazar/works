import userEvent from '@testing-library/user-event';

import { render } from '@utils';

import Button from './Button';

it('renders without crashing', () => {
  const { getByText } = render(<Button>Hello Button</Button>);
  const buttonElement = getByText(/Hello Button/i);
  expect(buttonElement).toBeTruthy();
});

it('click the button', async () => {
  const user = userEvent.setup();
  const clickFn = jest.fn();

  const { getByText } = render(<Button onClick={clickFn}>Hello Button</Button>);
  const buttonElement = getByText(/Hello Button/i);

  await user.click(buttonElement);
  expect(clickFn).toHaveBeenCalled();

  await user.click(buttonElement);
  expect(clickFn).toHaveBeenCalledTimes(2);
});
