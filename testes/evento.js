import { Treino } from "./treino.js";


export function evento(titulo, dataInicial, horaInicio, horaTermino, qtdTreinos, descricao) {

    let dataInicio = new Date(dataInicial)

    let treinos = []

    let data

    const intervaloDeDias = 7;

    let contagemDeTreinos = 0

    while (contagemDeTreinos < qtdTreinos) {
        
        let treino = new Treino(titulo, new Date(dataInicio), horaInicio, horaTermino, qtdTreinos, descricao)
        treinos.push(treino)
        data = dataInicio.setDate(dataInicio.getDate() + intervaloDeDias)
        dataInicial = new Date(data)
        
        
        
        contagemDeTreinos++;

    }
    return treinos
}

