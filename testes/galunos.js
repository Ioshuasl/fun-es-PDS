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

    getTreinosDeAlunos(index, indexTreino){
        console.log(this.alunos[index].nome)
        console.log(this.alunos[index].treinos[indexTreino])
    }

    encontrarAluno(nome){
        return this.alunos.findIndex(nome => nome === nome)
    }

    getCompromissoHoje(dataAtual) {
        let data = new Date(dataAtual)
        let alunosNoDia = [];

        this.alunos.forEach(aluno => {
            const temTreinoNoDia = aluno.treinos.findIndex(treino => treino.dataInicial.getTime() === data.getTime());
            const objetoAluno = {
                nome: aluno.nome,
                treino: aluno.treinos[temTreinoNoDia]
            }
            alunosNoDia.push(objetoAluno)
        });

        return alunosNoDia;
    }
}