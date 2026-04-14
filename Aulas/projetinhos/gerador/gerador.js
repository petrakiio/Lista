const char = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];
const numbers = [1,2,3,4,5,6,7,8,9,0];
const simbles = [
  '!','@','#','$','%','^','&','*','(',')',
  '-','_','=','+','[',']','{','}',';',';',
  ':',"'",'"',',','.','<','>','/','?','\\','|','`','~'
];

function gerarSenha(tamanho = 30) {
  const listUnique = char.concat(numbers, simbles);
  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    const j = Math.floor(Math.random() * listUnique.length);
    senha += listUnique[j];
  }
  return senha;
}


console.log(gerarSenha(30));