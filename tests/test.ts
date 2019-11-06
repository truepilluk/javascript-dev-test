import RomanNumerals from "../RomanNumerals";

var assert = require("assert");

describe("Roman Numeral Generator tests", function() {
    describe("Generate(1)", function() {
        it("should return 'I", () => {
            var generator = new RomanNumerals();

            assert.equal(generator.generate(1), "I");
        });
    });
});
