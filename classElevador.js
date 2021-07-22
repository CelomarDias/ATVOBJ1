class Elevador {
    constructor (capacidade, andarMaximo) {
        this.andar = 0;
        this.capacidade = capacidade;
        this.andarMaximo = andarMaximo;
        this.qtdPessoas = 0;
    }

    entrar() {
        if(this.qtdPessoas >= this.capacidade) {
            return 0
        } else {
            this.qtdPessoas++
            return this.qtdPessoas;
        }
    }

    sair() {
        if(this.qtdPessoas == 0) {
            return 0
        } else {
            this.qtdPessoas--
            return this.qtdPessoas;
        }
    }

    subir() {
        if(this.andar == this.andarMaximo) {
            return 0
        } else {
            this.andar++
            return this.andar
        }
    }

    descer() {
        if(this.andar == 0) {
            return 0
        } else {
            this.andar--
            return this.andar
        }
    }

};

