// const intervaloDeDias = 7;

// const qtdTreinos = 10

// let contagemDeTreinos = 0

// while (contagemDeTreinos < qtdTreinos) {
//     console.log(`evento Treino${contagemDeTreinos} criado nos dias ${dataInicio.toISOString().split('T')[0]}`);
    
//     dataInicio.setDate(dataInicio.getDate() + intervaloDeDias);
    
//     contagemDeTreinos++;
// }

export function evento(dataInicial,qtdTreinos) {

    let dataInicio = new Date(dataInicial)

    const intervaloDeDias = 7;

    let contagemDeTreinos = 0

    while (contagemDeTreinos < qtdTreinos) {
        console.log(`evento Treino${contagemDeTreinos} criado nos dias ${dataInicio.toISOString().split('T')[0]}`);
        
        dataInicio.setDate(dataInicio.getDate() + intervaloDeDias);
        
        contagemDeTreinos++;
    }
}

