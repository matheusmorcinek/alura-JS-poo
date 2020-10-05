import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//objeto
const cliente1 = new Cliente('Matheus', 123456789);

const contaCorrenteMatheus = new ContaCorrente(1001, cliente1);
contaCorrenteMatheus.depositar(100000.99);

const cliente2 = new Cliente('Bruna', 12341234);

const contaCorrenteBruna = new ContaCorrente(cliente2, 10001);
contaCorrenteBruna.depositar(120000.00);

// console.log(cliente1);
// console.log(contaCorrenteMatheus.saldo);
// console.log(`Sacar 1000000`);
// console.log(contaCorrenteMatheus.saldo);
// contaCorrenteMatheus.sacar(10000);
// console.log(contaCorrenteMatheus.saldo);
// contaCorrenteMatheus.depositar(250);
// console.log(contaCorrenteMatheus.saldo);
// console.log("\n");
// console.log(contaCorrenteBruna.cliente);
// console.log("\n");

console.log(contaCorrenteMatheus);
console.log(contaCorrenteBruna);
console.log("\n");
contaCorrenteMatheus.transferir(20000, contaCorrenteBruna);
console.log("transferindo.....");
console.log(contaCorrenteMatheus);
console.log(contaCorrenteBruna);

console.log(ContaCorrente.numeroDeContas);