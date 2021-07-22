let elevador = new Elevador(6,10);


executarSistema();

function apresentarMenu() {
    return window.prompt(`
    (1) - Subir Andar;
    (2) - Descer Andar;
    (3) - Qtd de pessoas no elevador;
    (4) - Andar atual;
    (5) - Entrar no elevador;
    (6) - Sair do elevador;
    (7) - Sair do sistema;
`)
}



function subir() {
        if (elevador.subir()) {
        alert(`O elevador subiu para o andar ${elevador.andar}`);
        } else {
        alert("Andar máximo já atingido")
        }
}

function descer() {
        if (elevador.descer()) {
        alert(`O elevador desceu para o andar ${elevador.andar}`)
        } else {
        alert("Andar mínimo já atingido")
        }
}

function entrar() {
        console.log(elevador)
        if (elevador.entrar()) {
        alert(`O elevador contém ${elevador.qtdPessoas} dentro`)
        }
}

function sair() {
        if (elevador.sair()) {
        alert(`O elevador contém ${elevador.qtdPessoas} dentro`)
        }
}

function executarSistema() {
    let key = apresentarMenu()
    switch (key) {
        case "1":
            subir();
            executarSistema();
        case "2":
            descer();
            executarSistema();
        case "3": 
            alert(`O elevador contém ${elevador.qtdPessoas} dentro`);
            executarSistema();
        case "4": 
            alert(`O elevador está no andar ${elevador.andar}`);
            executarSistema();
        case "5":
            entrar();
            executarSistema();
        case "6":
            sair();
            executarSistema();
        default:
            window.alert("Número fora do menu")
    }
    
}
