import { Treino } from "./treino.js"

export class Aluno {
    constructor(nome,dataNasc, email){
        this.nome = nome
        this.dataNasc = dataNasc
        this.email = email
        this.treinos = []
    }

    adiconarTreino(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao){
        const treino = new Treino(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao)
        treino.chamarEvento(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao)
    }
}

let aluno = new Aluno('ioshua','11,02,2005','ioshua@email.com')
console.table(aluno.adiconarTreino('peito','2024,09,5','09:00','10:00',10,'supino...'))
