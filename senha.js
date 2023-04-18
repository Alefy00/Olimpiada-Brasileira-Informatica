// define as variáveis
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';
const allChars = alphabet + alphabet.toUpperCase() + numbers + symbols;

// função para gerar uma senha aleatória
function generatePassword(length) {
  let password = '';
  
  // adiciona uma letra maiúscula
  password += getRandomChar(alphabet.toUpperCase());
  
  // adiciona um número
  password += getRandomChar(numbers);
  
  // adiciona um símbolo
  password += getRandomChar(symbols);
  
  // adiciona caracteres aleatórios
  for (let i = 0; i < length - 3; i++) {
    password += getRandomChar(allChars);
  }
  
  // embaralha a senha
  password = shuffle(password);
  
  return password;
}

// função para obter um caractere aleatório de uma string
function getRandomChar(str) {
  return str.charAt(Math.floor(Math.random() * str.length));
}

// função para embaralhar uma string
function shuffle(str) {
  let arr = str.split('');
  arr.sort(() => Math.random() - 0.5);
  return arr.join('');
}

// define as variáveis para as senhas
const easyPasswords = ['123456', 'qwerty', 'password'];
const mediumPasswords = ['iloveyou', 'admin', 'welcome', 'monkey', 'dragon'];
const hardPasswords = ['qwerty123', 'letmein', 'football', 'monkey123'];

// gera as senhas
const easy = generatePassword(6);
const medium = generatePassword(8);
const hard = generatePassword(10);

// verifica se as senhas geradas são iguais a alguma senha predefinida
if (easyPasswords.includes(easy)) {
  easy = shuffle(easy);
}

if (mediumPasswords.includes(medium)) {
  medium = shuffle(medium);
}

if (hardPasswords.includes(hard)) {
  hard = shuffle(hard);
}

// imprime as senhas geradas
console.log(`Easy password: ${easy}`);
console.log(`Medium password: ${medium}`);
console.log(`Hard password: ${hard}`);
