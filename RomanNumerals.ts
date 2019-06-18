interface RomanNumeralGenerator {
    generate(num: number);
}

class RomanNumerals implements RomanNumeralGenerator {
    generate(num: number) {
        var digits = num
            .toString()
            .split("")
            .reverse();
        var res = "";
        var i = 1;
        digits.forEach(function(n) {
            var no = parseInt(n);
            if (i == 1) {
                if (no < 4) {
                    res += "I";
                }
                if (no == 4) {
                    res += "IV";
                }
                if (no == 5) {
                    res += "V";
                }
            }
            if (i == 2) {
                if (no == 1) {
                    res += "X";
                }
            }
            i += 1;
        });
        return res;
    }
}

export default RomanNumerals;
