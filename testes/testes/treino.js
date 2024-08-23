import { evento } from "./evento.js"

export class Treino{
    constructor(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos, descricao){
        this.titulo = titulo
        this.dataInicial = dataInicial
        this.horaInicio = horaInicio
        this.horaTermnino = horaTermnino
        this.qtdTreinos = qtdTreinos
        this.descricao = descricao
    }


    chamarEvento(titulo, dataInicial, horaInicio, horaTermino, qtdTreinos, descricao){
        this.treinos = evento(titulo, dataInicial, horaInicio, horaTermino, qtdTreinos, descricao)
        
        if (this.treinos.length > 0) {
            console.log('treino cadastrado com sucesso')
        } else {
            console.log('treino não foi cadastrado')
        }
        return this.treinos
    }

    getTreinos(){
        this.treinos.forEach((treino, index) => {
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

let treino1 = new Treino('peito','2024,09,5','09:00','10:00',10,'supino...')
treino1.chamarEvento('peito','2024,09,5','09:00','10:00',10,'supino...')
console.table(treino1.treinos)