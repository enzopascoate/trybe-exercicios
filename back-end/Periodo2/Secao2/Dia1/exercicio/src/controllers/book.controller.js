const { bookServices } = require('../services');

const respondGetAllBooks = async (_req, res) => {

  const { status, body } = await bookServices.getAllBooks();
  return res.status(status).json(body);
};

const respondGetBookById = async (req, res) => {
  const { id } = req.params;
  const { status, body } = await bookServices.getBookById(id);

  return res.status(status).json(body);
};


const respondCreateNewBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await bookServices.createNewBook({ title, author, pageQuantity });

  return res.status(201).json(newBook);
};

const respondUpdateBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;

  const { status, body } = await bookServices.updateNewBook({ title, author, pageQuantity }, id);

  return res.status(status).json(body);
};

const respondDeleteBook = async (req, res) => {
  const { id } = req.params;
  
  const { status, body }  = await bookServices.deleteBook(id);;

  return res.status(status).json(body);
};

module.exports = {
  respondGetAllBooks,
  respondGetBookById,
  respondCreateNewBook,
  respondUpdateBook,
  respondDeleteBook,
}