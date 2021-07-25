import { rationalFresnel } from '../src/rationalFresnel';

import abramowitz from './abramowitz-and-stegun';
import zhang from './zhang-and-jin';

test('Abramowitz and Stegun', () => {
    abramowitz.forEach((row) => {
        const [x, tableC, tableS] = row;
        const [c, s] = rationalFresnel(x);
        expect(c).toBeCloseTo(tableC, 6);
        expect(s).toBeCloseTo(tableS, 6);
    });
});

test('Zhang and Jin', () => {
    zhang.forEach((row) => {
        const [x, tableC, tableS] = row;
        const [c, s] = rationalFresnel(x);
        expect(c).toBeCloseTo(tableC, 7);
        expect(s).toBeCloseTo(tableS, 7);
    });
});
