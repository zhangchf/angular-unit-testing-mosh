import { compute } from './compute';

describe('Testing Compute', () => {
    it('Should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('Should increment 1 if input is positive', () => {
        expect(compute(2)).toBe(3);
    });
});
