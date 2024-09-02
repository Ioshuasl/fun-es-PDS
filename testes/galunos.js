import { Aluno } from "./aluno.js";

export class GerenciadorAlunos{
    constructor(){
        this.alunos = []
    }

    adicionarAluno(nome,dataNasc, email){
        const aluno = new Aluno(nome,dataNasc, email)
        this.alunos.push(aluno)
    }

    addTreino(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao,aluno){
        //aluno.adicionarTreino(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao)
        console.log('treino adicionado', aluno.nome)
    }

    getAlunos(){
        this.alunos.forEach((aluno, index) => {
            console.log(aluno)
        })
    }
}