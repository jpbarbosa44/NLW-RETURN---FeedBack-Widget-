import express from 'express'
//GET, POST, PUT, PATCH, DELETE

//GET - BUSCAR INFORMAÇÕES 
//POST - CADASTRAR INFORMAÇÕES 
// PUT - ATUALIZAR INFORMAÇÕES DE UMA ENTIDADE 
//PATCH = ATUALIZAR UMA INFORMAÇÃO ÚNICA DE UMA ENTIDADE 

const app = express()

app.post('/feedbacks', (req, res) => {
    return res.send('Hello World')
})

app.listen(3333, () => {
    console.log('HTTP server running!')
});

