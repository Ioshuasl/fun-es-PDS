

export class Aluno {
    constructor(nome,dataNasc, email){
        this.nome = nome
        this.dataNasc = dataNasc
        this.email = email
        this.treinos = []
    }

    adiconarTreino(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao){
        const treino = new Treino(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao)
        this.treinos.push(treino)
    }

    listarTreinos(){
        console.log(this.treinos)
    }
}

