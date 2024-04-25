const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  rl.question('Digite o primeiro valor: ', (valor1) => {
    rl.question('Digite o segundo valor: ', (valor2) => {
      rl.question('Digite o terceiro valor: ', (valor3) => {
        // Variáveis com os valores digitados
        let primeiraVariavel = valor1;
        let segundaVariavel = valor2;
        let terceiraVariavel = valor3;
        console.log(`Valores armazenados: ${primeiraVariavel}, ${segundaVariavel}, ${terceiraVariavel}`);
        rl.close();
      });
    });
  });
