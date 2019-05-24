interface RomanNumeralGenerator {
    generate(num: number);
}

class RomanNumerals implements RomanNumeralGenerator {
    generate(num: number) {
        return "I";
    }
}

export default RomanNumerals;
