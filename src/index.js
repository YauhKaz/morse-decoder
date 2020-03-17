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
      let temp = expr.substr(k,10);
       if (temp==space) {str+=' ';k+=10;}
    else
 {
   let tempstr='';
 for (let i=0;i<temp.length-1;i++)
         {
             if (temp[i]==1)
             {
                 if (temp[i+1]==1)
                 {
                      tempstr+='-';i++;
                }
               else{
                    tempstr+='.';i++;
                 }
             }
         }
             k+=10;
 for (let prop in MORSE_TABLE)
             {
                 if (prop == tempstr) str+= MORSE_TABLE[prop];
             }
         }
     
     }     
     //console.log(str);
     return str;
 }

 module.exports = {
    decode
}

