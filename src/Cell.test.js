import { render, screen } from '@testing-library/react';
import Cell from './Cell';

test('renders', () => {
    <table>
        <thead></thead>
        <tbody>
            <tr>
                render(<Cell />);
            </tr>
        </tbody>
    </table>
});

test('that is matches snapshot', () => {
    const { asFragment } = render(<Cell />);
    console.log(asFragment)
    expect(asFragment()).toMatchSnapshot();
    //nothing really to getby since the td is empty.
});

