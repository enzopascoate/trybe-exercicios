const { Book } = require('../models');

const getAllBooks = async () => {
  const books = await Book.findAll();

  if(!books) return { status: 404, body: { message: 'Books not found' } };
  return { status: 200, body: books };
}

const getBookById = async (id) => {
  const book = await Book.findOne({where: {id}});

  if(!book) return { status: 404, body: { message: 'Book not found' } };
  return { status: 200, body: book };
};

const createNewBook = async ({title, author, pageQuantity}) => {
  const {insertId} = await Book.create({ title, author, pageQuantity });
  return insertId;
};

const updateNewBook = async ({title, author, pageQuantity}, id) => {  
  const [afftectedLines] = await Book.update({ title, author, pageQuantity }, { where: { id } });
  if(!afftectedLines) return { status: 404, body: { message: 'Book not found' } };

  return { status: 200, body: { message: 'Book updated!' } };

};

const deleteBook = async (id) => {
  const afftectedLines = await Book.destroy({ where: { id } });
  if(!afftectedLines) return { status: 404, body: { message: 'Book not found' } };

  return { status: 200, body: { message: 'Book deleted successfully!' } };
};

module.exports = {
  getAllBooks,
  getBookById,
  createNewBook,
  updateNewBook,
  deleteBook,
};