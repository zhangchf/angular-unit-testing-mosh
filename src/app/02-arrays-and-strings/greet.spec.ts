import { greet } from "./greet";

describe('Test Greeting', () => {
    it('Greeting should contain the input', () => {
        const result = greet('Chaofan')
        expect(result).toContain('Chaofan')
    })
})