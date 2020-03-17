const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   let str='';
   let k = 0;
   let space='**********';
   while (k<=expr.length)
   {
     let temp = str.substr(k,10);
     if (temp==space) str+=' ';
     else
     {
        for (let i=0;i<temp.length-1;i++)
        {
             let tempstr='';
            if (temp[i]==1)
            {
                 if (temp[i+1]==1)
                {
                     tempstr='.';
                    i++;
                }
                else{
                    tempstr='-';
                    i++;
                }
            }
            k+=10;
            for (let prop in MORSE_TABLE)
            {
                if (item == tempstr) str = item[key];
            }
        }
    }
    }      
    return str;
}

module.exports = {
    decode
}