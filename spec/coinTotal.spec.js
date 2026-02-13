import { coinTotal } from '../src/coinTotal.js';

describe("coinTotal", function() {

    it("returns 0 when all coins are 0", function() {
        expect(coinTotal(0,0,0,0,0)).toBe(0);
    });

    it("calculates correct total for mixed coins", function() {
        expect(coinTotal(1,1,1,1,1)).toBe(3.40);
        // 0.05 + 0.10 + 0.25 + 1.00 + 2.00 = 3.40
    });

    it("calculates correct total for only toonies", function() {
        expect(coinTotal(0,0,0,0,3)).toBe(6.00);
    });

});
