import { rationalFresnel } from '../src/rationalFresnel';

test('0', () => {
    const [c, s] = rationalFresnel(0);
    expect(c).toBe(0);
    expect(s).toBe(0);
});

test('NaN', () => {
    const [c, s] = rationalFresnel(NaN);
    expect(c).toBeNaN();
    expect(s).toBeNaN();
});

test('Infinity', () => {
    const [c, s] = rationalFresnel(Number.POSITIVE_INFINITY);
    expect(c).toBe(0.5);
    expect(s).toBe(0.5);
});

test('-Infinity', () => {
    const [c, s] = rationalFresnel(Number.NEGATIVE_INFINITY);
    expect(c).toBe(-0.5);
    expect(s).toBe(-0.5);
});

test('Large number', () => {
    // equivalent to x = 1.3e8
    const contribution = 1.28 * halfCycleWidth(8.5e15);
    expect(contribution).toBeLessThan(1e-8);
});

function halfCycleWidth(k: number) {
    return Math.sqrt(2 * (k + 1)) - Math.sqrt(2 * k);
}
