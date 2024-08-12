// src/controllers/employee.controller.js

const { employeeServices } = require('../services');
const { addressServices } = require('../services');


const respondGetAll = async (_req, res) => {
  try {
    const employees = await employeeServices.getAll();
    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const respondGetById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeeServices.getById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Pessoa colaboradora não encontrada' });
    } 

    if (req.query.includeAddresses === 'true') {
      const addresses = await addressServices.getAllByEmployeeId(id);
      return res.status(200).json({ employee, addresses });
    }


    return res.status(200).json(employee);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
}

const respondInsert = async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;
    const employee = await employeeServices.insert(
      { firstName, lastName, age, city, street, number },
    );

    return res.status(201).json({ id: employee.id, message: 'Cadastrado com sucesso' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
};

module.exports = {
  respondGetAll,
  respondGetById,
  respondInsert,
};