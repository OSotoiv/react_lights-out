import { render } from '@testing-library/react';
import Board from './Board';

test('renders', () => {
    render(<Board />);
});

test('that it renders Board with NO props passed in', () => {
    const { getByRole } = render(<Board />);
    // expect(asFragment()).toMatchSnapshot();
    //can not expect snapshot to be the same each time since the board uses random values to build the board
    const table = getByRole('table');
    expect(table).toBeInTheDocument();

    const rows = table.querySelectorAll('tr');
    const td = table.querySelectorAll('td')
    expect(rows.length).toBe(5);
    expect(td.length).toBe(25);
})
test('that is render Board with props passed in', () => {
    const { getByRole } = render(<Board nrows={3} ncols={3} />);
    // expect(asFragment()).toMatchSnapshot();
    //can not expect snapshot to be the same each time since the board uses random values to build the board
    const table = getByRole('table');
    expect(table).toBeInTheDocument();
    //tr should be nrows
    //td should be nrows x ncols
    const rows = table.querySelectorAll('tr');
    const td = table.querySelectorAll('td')
    expect(rows.length).toBe(3);
    expect(td.length).toBe(9);
})