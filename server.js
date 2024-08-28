const express = require('express');
const cors = require('cors');
const database = require('./database.js');
const port = process.env.PORT || 3000;
const users = require('./router/users');
const sequelize = require('sequelize');


const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/users', users)

database.authenticate()
    .then(() => console.log('Database connected... '))
    .catch(err => console.log('Error: ' + err));

database.sync({ force: false })
    .then(() => console.log('Tables created... '))
    .catch(err => console.log('Error: ' + err));


app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});