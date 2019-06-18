import RomanNumerals from "../RomanNumerals";

var assert = require("assert");

describe("Roman Numeral Generator tests", function() {
    describe("Generate(1)", function() {
        it("should return 'I", () => {
            var generator = new RomanNumerals();

            assert.equal(generator.generate(1), "I");
        });

        it("should return 'IV", () => {
            var generator = new RomanNumerals();

            assert.equal(generator.generate(4), "IV");
        });

        it("should return 'V", () => {
            var generator = new RomanNumerals();

            assert.equal(generator.generate(5), "V");
        });

        it("should return X", () => {
            var generator = new RomanNumerals();

            assert.equal(generator.generate(10), "X");
        });
    });
});
