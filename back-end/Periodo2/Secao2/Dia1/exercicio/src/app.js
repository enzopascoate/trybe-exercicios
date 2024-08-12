const express = require('express');
const { bookController, employeeController } = require('./controllers');

const app = express();
app.use(express.json());

app.get('/books', bookController.respondGetAllBooks);
app.get('/books/:id', bookController.respondGetBookById);
app.post('/books', bookController.respondCreateNewBook);
app.put('/books/:id', bookController.respondUpdateBook);
app.delete('/books/:id', bookController.respondDeleteBook);



app.get('/employees', employeeController.getAll);
app.get('/employees/:id', employeeController.getById);


app.post('/employees', employeeController.respondInsert);

app.use((err, req, res, next) => {
  res.status(500).json({ message: `Algo deu errado. Erro: ${err.message}` });
});

module.exports = app;