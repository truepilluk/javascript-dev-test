interface RomanNumeralGenerator {
    generate(num: number);
}

class RomanNumerals implements RomanNumeralGenerator {
    generate(num: number) {
        if (num === 1) return "I";
    }
}

export default RomanNumerals;
