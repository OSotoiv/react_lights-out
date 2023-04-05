import { render } from '@testing-library/react';
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
    expect(asFragment()).toMatchSnapshot();
    //nothing really to getby since the td is empty.
});

test('td shows from Cell', () => {
    const { getByTestId } = render(<Cell />);
    const td = getByTestId('cell')
})
