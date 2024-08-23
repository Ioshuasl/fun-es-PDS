// const intervaloDeDias = 7;

import { Treino } from "./treino.js";

// const qtdTreinos = 10

// let contagemDeTreinos = 0

// while (contagemDeTreinos < qtdTreinos) {
//     console.log(`evento Treino${contagemDeTreinos} criado nos dias ${dataInicio.toISOString().split('T')[0]}`);
    
//     dataInicio.setDate(dataInicio.getDate() + intervaloDeDias);
    
//     contagemDeTreinos++;
// }

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

//console.log(evento('peito','2024,08,22','09:00','10:00',10,'supino...'))


