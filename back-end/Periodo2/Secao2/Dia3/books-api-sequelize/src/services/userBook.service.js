// src/services/userBook.service.js

const { User, Book } = require('../models');

const getUsersBooksById = (id) => User.findOne({
  where: { id },
  // Propriedade through: { attributes: [] } é utilizada para não ter os atributos da tabela de relacionamento dentro do JSON retornado
  include: [{ model: Book, as: 'books', through: { attributes: [] } }],
});

module.exports = {
  getUsersBooksById,
};