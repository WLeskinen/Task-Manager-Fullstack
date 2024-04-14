const pool = require('../db');

const getAllTasks = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Cannot find task' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { name, details, startDate, endDate, status } = req.body;
    const result = await pool.query('INSERT INTO tasks (name, details, startDate, endDate, status) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, details, startDate, endDate, status]);
    res.status(201).json({ message: 'Task added successfully', task: result.rows[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { name, details, startDate, endDate, status } = req.body;
    const result = await pool.query('UPDATE tasks SET name = $1, details = $2, startDate = $3, endDate = $4, status = $5 WHERE id = $6 RETURNING *', [name, details, startDate, endDate, status, req.params.id]);
    res.status(200).json({ message: 'Task updated successfully', task: result.rows[0] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await pool.query('DELETE FROM tasks WHERE id = $1', [req.params.id]);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
