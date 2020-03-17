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
   expr = expr.split('');
   let str='';
   for (let j=0; expr.length; j++)
   {
       if (expr[j]==' ') str = '**********'; 
       else 
       {
       let temp='';
    for (let i=0; i<MORSE_TABLE.length; i++)
    {
        if (MORSE_TABLE(key)==expr[j]) 
        {
            temp=key;
            break;
        }
    } 
    let tempstr='';
    for (let k=0; k< temp.length; k++)
    {
        for (let ki=0; ki< 5-temp.length; ki++)
        {
            tempstr+='00';
        }
        if (temp[k]=='.') tempstr+='11';
        if (temp[k]=='-') tempstr+='10';
    }
   }   
   }
}

module.exports = {
    decode
}