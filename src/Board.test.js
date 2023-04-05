import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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
    // for (let row of rows) {
    //     expect(row).toBeEmpty()
    // }
})
test('shows Cells components and updates board when clicked', () => {
    //chanceLightStartsOn=0 garanties all cells will be on
    const { getByRole, debug } = render(<Board nrows={2} ncols={2} chanceLightStartsOn={0} />);
    // debug();
    const table = getByRole('table');
    const td = table.querySelectorAll('td')
    expect(td[0]).toHaveClass('Cell Cell-lit')
    fireEvent.click(td[0]);
    //clicking changes the cell class on itself and the cells to the right and bottom
    expect(td[0]).toHaveClass('Cell');
    expect(td[1]).toHaveClass('Cell');
    expect(td[2]).toHaveClass('Cell');
    expect(td[3]).toHaveClass('Cell Cell-lit')

})