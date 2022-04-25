const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/fortune", (req, res) => {
  const fortune = ['A beautiful, smart, and loving person will be coming into your life.',
  'A faithful friend is a strong defense.',
  'A fresh start will put you on your way.',
  'A friend asks only for your time not your money.',
  'A friend is a present you give yourself.'
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];


  res.status(200).send(randomFortune);
  
});


const pokemon = require('./controller')

app.get('/api/fortune', pokemon.getPokemon)
app.post('/api/fortune', pokemon.addPokemon)
app.put('/api/fortune/:id',pokemon.updatePokemon)
app.delete('/api/fortune/:id', pokemon.deletePokemon)



app.listen(4000, () => console.log("Server running on 4000"));
