import { Aluno } from "./aluno.js";

export class GerenciadorAlunos{
    constructor(){
        this.alunos = []
    }

    adicionarAluno(nome,dataNasc, email){
        const aluno = new Aluno(nome,dataNasc, email)
        this.alunos.push(aluno)
    }

    mostrarTreino(index){
        console.log(this.alunos[index].getTreino())
    }

    getAlunos(){
        this.alunos.forEach((aluno, index) => {
            console.log(index)
            console.log(aluno)
        })
    }

    encontrarAluno(nome){
        return this.alunos.findIndex(nome => nome === nome)
    }
}