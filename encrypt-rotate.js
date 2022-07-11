// Write class below
class ShiftCipher {
  constructor(shift){
    this.shift = shift
  }

  encrypt(text){
let codes = [];

for (let i = 0; i<text.length; i++){
  let char = text.charCodeAt(i);
  let changed = text.charCodeAt(i) + this.shift;

  if ((char >= 97 && char <= 122) && changed<=122) {
  codes.push(changed-32)
  } else if ((char >= 97 && char <= 122) && changed>122) {
    changed-=58
  codes.push(changed-32)
  } else  if ((char >= 65 && char <= 90) && changed<=90) {
  codes.push(changed)
  } else if ((char >= 65 && char <= 90) && changed>90) {
    changed+=6
  codes.push(changed)
  } else {
    codes.push(char)
  }

}

let letters = []
for (let i = 0; i<codes.length; i++){
  letters.push(String.fromCharCode(codes[i]))
}

console.log(letters.join(''))
  }

  decrypt(text){
let codes = [];

for (let i = 0; i<text.length; i++){
  let char = text.charCodeAt(i);
  let changed = text.charCodeAt(i) - this.shift;

  if ((char >= 97 && char <= 122) && changed>=97) {
  codes.push(changed)
  } else if ((char >= 97 && char <= 122) && changed < 97) {
    changed+=58
  codes.push(changed)
  } else  if ((char >= 65 && char <= 90) && changed>=65) {
  codes.push(changed+32)
  } else if ((char >= 65 && char <= 90) && changed < 65) {
    changed-=6
  codes.push(changed+32)
  } else {
    codes.push(char)
  }

}

let letters = []
for (let i = 0; i<codes.length; i++){
  letters.push(String.fromCharCode(codes[i]))
}

console.log(letters.join(''))
  }
}

const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA');
