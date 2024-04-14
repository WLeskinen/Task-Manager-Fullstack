const pool = require('../db');

const getAllTasks = (req, res) => { 
  pool.query('SELECT * FROM tasks', (error, results) => {
    if (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM tasks WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.error('Error fetching task by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const createTask = (req, res) => {
  const { name, content, startdate, enddate, tags } = req.body;
  pool.query(
    'INSERT INTO tasks (name, content, startdate, enddate, tags) VALUES ($1, $2, $3, $4, $5)',
    [name, content, startdate, enddate, tags],
    (error, results) => {
      if (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).send('Task added successfully!');
      }
    }
  );
};

const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, content, startdate, enddate, tags } = req.body;
  pool.query(
    'UPDATE tasks SET name = $1, content = $2, startdate = $3, enddate = $4, tags = $5 WHERE id = $6',
    [name, content, startdate, enddate, tags, id],
    (error, results) => {
      if (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).send('Task modified successfully');
      }
    }
  );
}; 

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).send('Task deleted successfully');
    }
  });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
