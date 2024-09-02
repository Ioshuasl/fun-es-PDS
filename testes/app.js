import { Aluno } from "./aluno.js";
import { GerenciadorAlunos } from "./galunos.js";

let gerenciador = new GerenciadorAlunos;
gerenciador.adicionarAluno('ioshua','11,02,2005','ioshua@email.com')
gerenciador.adicionarAluno('alanna','12,06,2005','alanna@email.com')
gerenciador.alunos[0].adicionarTreino('peito','2024,09,5','09:00','10:00',10,'supino...')
console.log(gerenciador.getAlunos())
//console.log(gerenciador.mostrarTreino(0))
//console.log(gerenciador.encontrarAluno('ioshua'))
//console.log(gerenciador.alunos[0].nome)