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
    let arr = []
    let elem = ''
    let output = ''
    for (let i = 0; i < expr.length; i++) {
        elem += expr[i]
        if (elem.length == 10) {
            arr.push(elem)
            elem = ''
        }
    }
    arr.forEach(element => {
        if (element == '**********') {
            output += ' '
        } else {
            // for nodejs 12+: used replaceAll()
            //output += (MORSE_TABLE[element, parseInt(element).toString().replaceAll('10', '.').replaceAll('11', '-')])
            // for nodejs 10: used replace()
            output += (MORSE_TABLE[element, parseInt(element).toString().replace(/10/g,'.').replace(/11/g,'-')])
        }
    });
    return output
}

module.exports = {
    decode
}