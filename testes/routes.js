import express from "express"
import GerenciadorAlunos from "./galunos.js"

const routes = express()

routes.get('/alunos', (req,res) => {
    return res.json(GerenciadorAlunos.getAlunos())
})

routes.get('/mostrarTreinoAluno/:id', (req,res) => {

    const {id} = req.params
    return res.json({
        aluno: GerenciadorAlunos.alunos[id].nome,
        treinos: GerenciadorAlunos.alunos[id].treinos
    })
})

routes.get('/getCompromissoHoje', (req,res) => {

    const treinosHoje = GerenciadorAlunos.getCompromissoHoje()
    return res.json(treinosHoje)
})

routes.get('/getCompromissoDia/:dataQualquer' , (req,res) => {
    const {dataQualquer} = req.params 

    const treinosDia = GerenciadorAlunos.getCompromissoDia(dataQualquer)

    return res.json(treinosDia)

})

routes.post('/addAluno', (req, res) => {
    const { nome, dataNasc, email } = req.body;

    if (!nome || !dataNasc || !email) {
        return res.status(200).json({ message: 'Todos os campos são obrigatórios: nome, dataNasc, email.' });
    }

    const newAluno = GerenciadorAlunos.adicionarAluno(nome, dataNasc, email);
    
    if (newAluno) {
        return res.status(201).json({
            aluno: newAluno,
            message: 'Aluno criado com sucesso!'
        }); 
    } else {
        return res.status(500).json({ message: 'Erro ao criar o aluno.' });
    }

});

routes.post('/addTreino/:id', (req,res) => {
    const { titulo,dataInicial,horaInicio,horaTermino,qtdTreinos, descricao } = req.body
    const { id } = req.params

    const newTreino = GerenciadorAlunos.alunos[id].adicionarTreino(titulo,dataInicial,horaInicio,horaTermino,qtdTreinos, descricao)

    if (newTreino) {
        return res.status(201).json({
            message: 'treino criado com sucesso',
            treino: newTreino
        })
    } else {
        return res.status(500).json({ message: 'Erro ao criar treino '})
    }
})


export default routes