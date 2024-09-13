import { Aluno } from "./aluno.js";
import { GerenciadorAlunos } from "./galunos.js";

let gerenciador = new GerenciadorAlunos;
gerenciador.adicionarAluno('ioshua','11,02,2005','ioshua@email.com') // CADASTRAR ALUNO
gerenciador.adicionarAluno('alanna','12,06,2005','alanna@email.com')
gerenciador.alunos[0].adicionarTreino('peito','2024,09,5','09:00','10:00','supino...',10) // CADASTRAR TREINO DO ALUNO TAL
//gerenciador.alunos[0].adicionarTreino('costa','2024,09,6','09:00','10:00',10,'puxada...')
//gerenciador.alunos[0].adicionarTreino('perna','2024,09,7','09:00','10:00',10,'agachamento...')
//gerenciador.alunos[1].adicionarTreino('quadriceps','2024,09,5','10:00','11:00',10,'extensora...')
//console.log(gerenciador.getAlunos()) // MOSTRAR ALUNOS CADASTRADOS NO SISTEMA
//console.log(gerenciador.encontrarAluno('alanna')) // FUNCAO QUE MOSTRA O INDICE DO ALUNO COM O NOME TAL
//console.log(gerenciador.alunos[0].grupoTreino)
//console.log(gerenciador.getTreinosDeAlunos(0,7)) // MOSTRA UM TREINO ESPECÍFICO DO ALUNO TAL
//console.log(gerenciador.getCompromissoHoje()) // MOSTRA OS COMPROMISSO QUE O USUARIO POSSUI NO DIA ATUAL
//console.log('--------------------------')
//console.log(gerenciador.getCompromissoDia('2024,09,13')) // MOSTRA OS COMPROMISSOS DO USUARIO NUMA DATA ESPECIFICA
//gerenciador.removerAluno(1) // REMOVE UM ALUNO
//console.log(gerenciador.getAlunos()) 

//console.table(gerenciador.alunos[0].treinos)
// console.log(gerenciador.removerTreino(0,10))
console.log(gerenciador.alunos[0])
console.log(gerenciador.alunos[0].removerListaTreino('peito'))
//console.table(gerenciador.removerTreinosPorTitulo(1,'quadricep')) // REMOVE TREINO ESPECIFICO POR TITULO DO TREINO
console.log(gerenciador.alunos[0])

// let stringData = "2024,09,12 09:00.040Z"
// let dataFormatada = new Date(stringData)
// console.log(dataFormatada)

// let data = "2024,09,12"
// let hora = "09:00"

// let dataHora = `${data} ${hora}.040Z`
// let date = new Date(dataHora)
// console.log(date)
// console.log(date.toLocaleDateString())

//console.table(gerenciador.alunos[0].treinos)