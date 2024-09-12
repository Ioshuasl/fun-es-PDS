import express from "express"
import routes from "./routes.js"

const app = express()
const PORT = 5172

app.use(express.json());
app.use(routes)

app.get('/', (req,res)=> {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta <http://localhost>:${PORT}`)
})