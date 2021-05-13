const express = require("express");
const bodyParser = require('body-parser');
const configQuartos = require('./configQuartos');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.post('/', (req, res) => {
  const { pessoas, quartos, tipo} = req.body;

  const resultado = configQuartos.filter(quarto =>
    quarto.pessoas == pessoas &&
    quarto.quartos == quartos &&
    quarto.tipo === tipo
  )

  const message = `A melhor opção para você é o apartamento ${resultado[0].quarto}, o aluguel dele ficará em ${resultado[0].valor}`

  return res.json({ message })
});

app.listen(process.env.PORT || 3000, () => {
 console.log("Server running on port 3000");
});
