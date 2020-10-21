const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let x = 0;
    for (let i = 0; i < expr.length; i += 10) {
        arr[x++] = expr.substr(i, 10);
    }

    let arr2 = {};
    for (let key in MORSE_TABLE) {
        let newKey = key.replace(/\./g, '10').replace(/-/g, '11');
        newKey = newKey.padStart(10, '0');
        arr2[newKey] = MORSE_TABLE[key];
    }

    arr2['**********'] = ' ';
    let result = '';
    for (let value of arr) {
        result += arr2[value];

    }
    return result;
}

module.exports = {
    decode
}