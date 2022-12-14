const express = require("express")
const path = require("path")
const port = 3333

let initialPath = path.join(__dirname, "public") //dirname - diretorio atual concatenando (join) com a pasta public -// pegando caminho dinamicamente.

let app = express() //declarar instacia de app - cria uma app express
app.use(express.static(initialPath)) //servidor estatico da pasta public

app.get("/", (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"))  //passando para o servidor quando for chamado e náo tiver nada depois da / manda uma resposta enviando o arquivo initialfile+indexhtml
}) 

app.listen(port, () => {
    console.log(`Server start up on port ${port}!`)
})
