import { evento } from './eventorecorrente.js';
import { getDayOfWeek } from './date.js'

class Treino{
    constructor(titulo,dataInicial,horaInicio,horaTermnino,qtdTreinos){
        this.titulo = titulo
        this.dataInicial = dataInicial
        this.horaInicio = horaInicio
        this.horaTermnino = horaTermnino
        this.qtdTreinos = qtdTreinos
    }
    
    chamarEvento() {
        evento(this.dataInicial, this.qtdTreinos)
    }

    diaDaSemana(){
        getDayOfWeek(this.dataInicial)
    }
}

let aluno = new Treino('Peito','2024,08,14','09:00','10:30',10)
aluno.chamarEvento()
aluno.diaDaSemana()