import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    static numeroDeContas = 0;

    agencia;

    // composição de classes
    _cliente;

    set cliente(novoCliente) {

        if (novoCliente instanceof Cliente) {

            this._cliente = novoCliente;
        }
    }

    get cliente() {

        return this._cliente;
    }

    _saldo = 0;

    get saldo() {

        return this._saldo;
    }

    constructor(agencia, cliente) {

        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {

        if (this._saldo >= valor) {

            this._saldo = this._saldo - valor;
            return valor;
        }
    }

    depositar(valor) {

        // if (valor > 0) {
        //     this._saldo += valor;
        // }

        //EARLY RETURN - verificar tudo que nao quero primeiro

        if (valor <= 0) return;

        this._saldo += valor;
    }

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);

        conta.depositar(valorSacado);
    }
}
