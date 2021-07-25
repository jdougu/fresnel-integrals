/**
 * Return the Fresnel integrals `[C(x), S(x)]`.
 * 
 * Implementation from 'Rational Approximations for the Fresnel Integrals' by
 * Mark A. Heald.
 */
export function rationalFresnel(x: number): [number, number] {
    if (x === 0) return [0, 0];
    if (x === NaN) return [NaN, NaN];
    if (x > 1.3e8) return [0.5, 0.5];
    if (x < -1.3e8) return [-0.5, -0.5];
    const R = evaluateRationalPolynomial(c, d, x);
    const A = 0.5 * Math.PI * (evaluateRationalPolynomial(a, b, x) - x * x);
    const C = 0.5 - R * Math.sin(A);
    const S = 0.5 - R * Math.cos(A);
    return [C, S];
}

function evaluateRationalPolynomial(ns: number[], ds: number[], x: number) {
    return evaluatePolynomial(ns, x) / evaluatePolynomial(ds, x);
}

export function evaluatePolynomial(coefficients: number[], x: number) {
    let accumulator = coefficients[coefficients.length - 1];
    for (let i = coefficients.length - 2; i >= 0; i--) {
        accumulator = (accumulator * x) + coefficients[i];
    }
    return accumulator;
}

const a = [
    1,
    0.1945161,
    0.2363641,
    0.068324,
    0.0241212
];

const b = [
    2,
    2.9355041,
    2.7570246,
    1.875721,
    0.978113,
    0.356681,
    0.118247
];

const c = [
    1,
    0.7769507,
    0.6460117,
    0.3460509,
    0.1339259,
    0.0433995
];

const d = [
    Math.SQRT2,
    2.5129806,
    2.7196741,
    1.9840524,
    1.0917325,
    0.4205217,
    0.13634704
];
