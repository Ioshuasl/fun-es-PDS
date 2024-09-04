import { Treino } from "./treino.js"

export class Aluno {
    constructor(nome,dataNasc, email){
        this.nome = nome
        this.dataNasc = dataNasc
        this.email = email
        this.treinos = []
        this.grupoTreino = []
    }

    adicionarTreino(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao){
        const treino = new Treino(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao)
        const sessaotreinos = treino.chamarEvento(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao)
        this.treinos = this.treinos.concat(sessaotreinos)
        this.grupoTreino.push(sessaotreinos)
    }

    getTreino(){
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

    removerTreino(index){
        this.treinos.splice(index - 1, 1)
    }

    removerListaTreino(treino, titulo){
        for (let i = 0; i < this.treinos.length; i++) {
            if (treino.titulo === titulo){
                console.log(i)
            } else {
                console.log('nao encontrado nada com esse titulo')
            }

        }
    }

    filtrarTreino(titulo){
        return this.treinos.filter(treino => treino.titulo === titulo)
    }
}

// let ioshua = new Aluno('ioshua','11/02/2005','ioshua@email.com')
// ioshua.adicionarTreino('peito','2024,09,5','09:00','10:00',10,'supino...')
// let data = new Date('2024,9,5')
// console.log(ioshua.treinos.some(treino => treino.dataInicial.getTime() === data))
// console.log(ioshua.treinos[0].dataInicial.getTime())
// console.log(data)

// if (ioshua.treinos[0].dataInicial.getTime() == data.getTime()){
//     console.log('true')
// } else {
//     console.log('false')
// }