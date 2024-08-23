import { evento } from './evento.js'; // Importação da função evento

const treinosacb = evento('peito','2024,09,5','09:00','10:00',10,'supino...');

treinos.forEach((treino, index) => {
    console.log(`Treino ${index + 1}:`);
    console.log(`Título: ${treino.titulo}`);
    console.log(`Data: ${treino.dataInicial}`);
    console.log(`Hora Início: ${treino.horaInicio}`);
    console.log(`Hora Término: ${treino.horaTermnino}`);
    console.log(`Quantidade de Treinos: ${treino.qtdTreinos}`);
    console.log(`Descrição: ${treino.descricao}`);
    console.log('----------------------------');
});

