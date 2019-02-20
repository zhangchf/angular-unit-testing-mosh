import { getCurrencies } from "./getCurrencies";

describe('Test GetCurriencies', () => {
    it("Should contain expected currencies", () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
})