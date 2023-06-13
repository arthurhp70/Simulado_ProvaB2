// Função para verificar se um número é primo
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  
  
  
  // Função para inverter uma string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
 
 
 
 
  // Função para calcular a frequência dos elementos em um vetor
  function calculateFrequency(array) {
    const frequency = {};
  
    array.forEach((element) => {
      frequency[element] = frequency[element] ? frequency[element] + 1 : 1;
    });
  
    return frequency;
  }
  
 
 
 
 
  // Função para verificar se uma senha atende aos critérios
  function checkPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  }
  
 
 
 
 
  // Função para remover elementos duplicados de uma matriz
  function removeDuplicates(array) {
    return [...new Set(array)];
  }
  
 
 
 
 
 
 
  // Função para lidar com o envio do formulário de verificação de número primo
  function handlePrimeFormSubmit(event) {
    event.preventDefault();
  
    const numberInput = document.getElementById('numberInput');
    const number = parseInt(numberInput.value);
  
    const primeResult = document.getElementById('primeResult');
  
    if (isPrime(number)) {
      primeResult.textContent = `${number} é um número primo.`;
    } else {
      primeResult.textContent = `${number} não é um número primo.`;
    }
  
    numberInput.value = '';
  }
  
 
 
  // Função para lidar com o envio do formulário de inversão de string
  function handleReverseFormSubmit(event) {
    event.preventDefault();
  
    const stringInput = document.getElementById('stringInput');
    const string = stringInput.value;
  
    const reverseResult = document.getElementById('reverseResult');
  
    const reversedString = reverseString(string);
    reverseResult.textContent = `String invertida: ${reversedString}`;
  
    stringInput.value = '';
  }
  
  
  
  
  // Função para lidar com o envio do formulário de cálculo de frequência
  function handleFrequencyFormSubmit(event) {
    event.preventDefault();
  
    const arrayInput = document.getElementById('arrayInput');
    const arrayString = arrayInput.value;
    const array = arrayString.split(',').map((element) => parseInt(element.trim()));
  
    const frequencyResult = document.getElementById('frequencyResult');
  
    const frequency = calculateFrequency(array);
    frequencyResult.textContent = `Frequência dos elementos: ${JSON.stringify(frequency)}`;
  
    arrayInput.value = '';
  }
  
  
  
  
  
  // Função para lidar com o envio do formulário de verificação de senha
  function handlePasswordFormSubmit(event) {
    event.preventDefault();
  
    const passwordInput = document.getElementById('passwordInput');
    const password = passwordInput.value;
  
    const passwordResult = document.getElementById('passwordResult');
  
    if (checkPassword(password)) {
      passwordResult.textContent = 'A senha atende aos critérios.';
    } else {
      passwordResult.textContent = 'A senha não atende aos critérios.';
    }
  
    passwordInput.value = '';
  }
  
  
  
  
  // Função para lidar com o envio do formulário de remoção de elementos duplicados
  function handleUniqueArrayFormSubmit(event) {
    event.preventDefault();
  
    const arrayInput = document.getElementById('arrayInput');
    const arrayString = arrayInput.value;
    const array = arrayString.split(',').map((element) => parseInt(element.trim()));
  
    const uniqueArrayResult = document.getElementById('uniqueArrayResult');
  
    const uniqueArray = removeDuplicates(array);
    uniqueArrayResult.textContent = `Matriz sem elementos duplicados: ${JSON.stringify(uniqueArray)}`;
  
    arrayInput.value = '';
  }
  
  
  
  // Adicionar os eventos de envio dos formulários
  const primeForm = document.getElementById('primeForm');
  primeForm.addEventListener('submit', handlePrimeFormSubmit);
  
  const reverseForm = document.getElementById('reverseForm');
  reverseForm.addEventListener('submit', handleReverseFormSubmit);
  
  const frequencyForm = document.getElementById('frequencyForm');
  frequencyForm.addEventListener('submit', handleFrequencyFormSubmit);
  
  const passwordForm = document.getElementById('passwordForm');
  passwordForm.addEventListener('submit', handlePasswordFormSubmit);
  
  const uniqueArrayForm = document.getElementById('uniqueArrayForm');
  uniqueArrayForm.addEventListener('submit', handleUniqueArrayFormSubmit);