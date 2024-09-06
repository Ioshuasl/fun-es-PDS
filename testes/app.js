import { Aluno } from "./aluno.js";
import { GerenciadorAlunos } from "./galunos.js";

let gerenciador = new GerenciadorAlunos;
gerenciador.adicionarAluno('ioshua','11,02,2005','ioshua@email.com')
gerenciador.adicionarAluno('alanna','12,06,2005','alanna@email.com')
gerenciador.alunos[0].adicionarTreino('peito','2024,09,5','09:00','10:00',10,'supino...')
gerenciador.alunos[0].adicionarTreino('costa','2024,09,6','09:00','10:00',10,'puxada...')
gerenciador.alunos[0].adicionarTreino('perna','2024,09,7','09:00','10:00',10,'agachamento...')
gerenciador.alunos[1].adicionarTreino('quadriceps','2024,09,5','10:00','11:00',10,'extensora...')
//console.log(gerenciador.getAlunos())
//console.log(gerenciador.mostrarTreinosAluno(0))
//console.log(gerenciador.encontrarAluno('ioshua'))
//console.log(gerenciador.alunos[0].nome)
//console.log(gerenciador.alunos[0].grupoTreino)
//console.log(gerenciador.getTreinosDeAlunos(0,7))
//console.log(gerenciador.getCompromissoHoje())
//console.log('--------------------------')
//console.log(gerenciador.getCompromissoDia('2024,09,13'))
//gerenciador.removerAluno(1)
//console.log(gerenciador.getAlunos())

//console.table(gerenciador.alunos[0].treinos)
// console.log(gerenciador.removerTreino(0,10))
//console.log(gerenciador.alunos[0].removerListaTreino('peito'))
console.table(gerenciador.removerTreinosPorTitulo(0,'peito'))