import { Aluno } from "./aluno.js";

export class GerenciadorAlunos{
    constructor(){
        this.alunos = []
    }

    adicionarAluno(nome,dataNasc, email){
        const aluno = new Aluno(nome,dataNasc, email)
        this.alunos.push(aluno)
    }

    mostrarTreinosAluno(index){
        console.log(this.alunos[index].getTreino())
    }

    getAlunos(){
        this.alunos.forEach((aluno, index) => {
            let oAluno = {
                indice: index,
                nome: aluno.nome,
                dataNascimento: aluno.dataNasc,
                email: aluno.email,
            }
            
            console.log('Registro: ',oAluno.indice)
            console.log('Nome: ', oAluno.nome)
            console.log('Data de Nascimento: ',oAluno.dataNascimento)
            console.log('Email: ',oAluno.email)
            console.log('===============================')
        })
    }

    getTreinosDeAlunos(index, indexTreino){
        console.log(this.alunos[index].nome)
        console.log(this.alunos[index].treinos[indexTreino])
    }

    encontrarAluno(nome){
        return this.alunos.findIndex(aluno => aluno.nome === nome)
    }

    getCompromissoHoje() {
        let data = new Date()
        let compromissos = [];

        this.alunos.forEach(aluno => {
            const temTreinoNoDia = aluno.treinos.findIndex(treino => treino.dataInicial.toLocaleDateString() === data.toLocaleDateString());
            let objetoAluno = Object()

            if (temTreinoNoDia >= 0) {
                objetoAluno = {
                    nome: aluno.nome,
                    titulo: aluno.treinos[temTreinoNoDia].titulo,
                    data: aluno.treinos[temTreinoNoDia].dataInicial.toLocaleDateString(),
                    horario: `${aluno.treinos[temTreinoNoDia].horaInicio} - ${aluno.treinos[temTreinoNoDia].horaTermnino}`,
                    descricao: aluno.treinos[temTreinoNoDia].descricao
                }
                compromissos.push(objetoAluno)
            }

        });

        return compromissos

    }

    getCompromissoDia(dataQualquer) {
        let dataEspecifica = new Date(dataQualquer)
        let compromissos = [];

        this.alunos.forEach(aluno => {
            const temTreinoNoDia = aluno.treinos.findIndex(treino => treino.dataInicial.toLocaleDateString() === dataEspecifica.toLocaleDateString());
            let objetoAluno = Object()

            if (temTreinoNoDia >= 0) {
                objetoAluno = {
                    nome: aluno.nome,
                    titulo: aluno.treinos[temTreinoNoDia].titulo,
                    data: aluno.treinos[temTreinoNoDia].dataInicial.toLocaleDateString(),
                    horario: `${aluno.treinos[temTreinoNoDia].horaInicio} - ${aluno.treinos[temTreinoNoDia].horaTermnino}`,
                    descricao: aluno.treinos[temTreinoNoDia].descricao
                }
                compromissos.push(objetoAluno)
            }

        });

        return compromissos

    }

    removerAluno(index){
        this.alunos.splice(index,1)
    }

    removerTreinosPorTitulo(indexAluno, titulo){        
        return this.alunos[indexAluno].removerListaTreino(titulo)
    }
}