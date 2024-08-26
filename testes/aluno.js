import { Treino } from "./treino.js"

export class Aluno {
    constructor(nome,dataNasc, email){
        this.nome = nome
        this.dataNasc = dataNasc
        this.email = email
        this.treinos = []
    }

    adicionarTreino(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao){
        const treino = new Treino(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao)
        this.treinos = treino.chamarEvento(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao)
    }

    getLista(){
        return this.treinos.forEach((treino, index) => {
            console.log(`Treino ${index + 1}:`);
            console.log(`Título: ${treino.titulo}`);
            console.log(`Data: ${treino.dataInicial}`);
            console.log(`Hora Início: ${treino.horaInicio}`);
            console.log(`Hora Término: ${treino.horaTermnino}`);
            console.log(`Quantidade de Treinos: ${treino.qtdTreinos}`);
            console.log(`Descrição: ${treino.descricao}`);
            console.log('----------------------------');
        })
    }
}

//let aluno = new Aluno('ioshua','11,02,2005','ioshua@email.com')
//console.table(aluno.adiconarTreino('peito','2024,09,5','09:00','10:00',10,'supino...'))
