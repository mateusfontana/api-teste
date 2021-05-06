var express = require("express");
var app = express();

app.post('/', (req, res) => {
  const { pessoas, quartos, tipo} = req.query;

  const resultado = configQuartos.filter(
    quarto => quarto.pessoas == pessoas &&
    quarto.quartos == quartos &&
    quarto.tipo === tipo
  )

  console.log(resultado)

  const message = `A melhor opção para você é o quarto ${resultado[0].quarto}, o valor dele ficará em ${resultado[0].valor}`

  console.log(message)

  return res.json({ message })
});

app.listen(process.env.PORT || 3000, () => {
 console.log("Server running on port 3000");
});


const configQuartos = [{
  "quarto": "100",
  "pessoas": 1,
  "quartos": 1,
  "valor": 100,
  "tipo": "SIMPLES"
},
{
  "quarto": "101",
  "pessoas": 1,
  "quartos": 1,
  "valor": 300,
  "tipo": "LUXO"
},
{
  "quarto": "102",
  "pessoas": 1,
  "quartos": 2,
  "valor": 200,
  "tipo": "SIMPLES"
},
{
  "quarto": "103",
  "pessoas": 1,
  "quartos": 2,
  "valor": 400,
  "tipo": "LUXO"
},
{
  "quarto": "104",
  "pessoas": 2,
  "quartos": 1,
  "valor": 200,
  "tipo": "SIMPLES"
},
{
  "quarto": "105",
  "pessoas": 2,
  "quartos": 1,
  "valor": 400,
  "tipo": "LUXO"
},
{
  "quarto": "106",
  "pessoas": 2,
  "quartos": 2,
  "valor": 300,
  "tipo": "SIMPLES"
},
{
  "quarto": "107",
  "pessoas": 2,
  "quartos": 2,
  "valor": 600,
  "tipo": "LUXO"
},
{
  "quarto": "108",
  "pessoas": 3,
  "quartos": 1,
  "valor": 300,
  "tipo": "SIMPLES"
},
{
  "quarto": "109",
  "pessoas": 3,
  "quartos": 1,
  "valor": 600,
  "tipo": "LUXO"
},
{
  "quarto": "110",
  "pessoas": 3,
  "quartos": 2,
  "valor": 400,
  "tipo": "SIMPLES"
},
{
  "quarto": "111",
  "pessoas": 3,
  "quartos": 2,
  "valor": 800,
  "tipo": "LUXO"
},
{
  "quarto": "112",
  "pessoas": 4,
  "quartos": 2,
  "valor": 400,
  "tipo": "SIMPLES"
},
{
  "quarto": "113",
  "pessoas": 4,
  "quartos": 2,
  "valor": 800,
  "tipo": "LUXO"
},
{
  "quarto": "114",
  "pessoas": 4,
  "quartos": 1,
  "valor": 300,
  "tipo": "SIMPLES"
},
{
  "quarto": "115",
  "pessoas": 4,
  "quartos": 1,
  "valor": 600,
  "tipo": "LUXO"
}]