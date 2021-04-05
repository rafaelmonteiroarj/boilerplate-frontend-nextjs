import { render } from '@testing-library/react';
import Example from '..';

describe('Testing example component', () => {
  it('render component', () => {
    const { getByText } = render(<Example />);
    const title = getByText('Boilerplate React');
    expect(title).toBeInTheDocument();
  });
});
