const pool = require('../db');

const getAllTasks = (req, res) => { 
  pool.query('SELECT * FROM Task', (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM Task WHERE id = $1', [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const createTask = (req, res) => {
  const { Title, Description, StartDate, EndDate, status_id, tag_id, activity_type_id } = req.body;
  pool.query(
    'INSERT INTO Task (Title, Description, StartDate, EndDate, status_id, tag_id, activity_type_id) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [Title, Description, StartDate, EndDate, status_id, tag_id, activity_type_id],
    (error, results) => {
      if (error) throw error;
      res.status(201).send('Task added successfully!');
    }
  );
};

const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const { Title, Description, StartDate, EndDate, status_id, tag_id, activity_type_id } = req.body;
  pool.query(
    'UPDATE Task SET Title = $1, Description = $2, StartDate = $3, EndDate = $4, status_id = $5, tag_id = $6, activity_type_id = $7 WHERE Id = $8',
    [Title, Description, StartDate, EndDate, status_id, tag_id, activity_type_id, id],
    (error, results) => {
      if (error) throw error;
      res.status(200).send('Task modified successfully!');
    }
  );
}; 

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('DELETE FROM Task WHERE Id = $1', [id], (error, results) => {
    if (error) throw error;
    res.status(200).send('Task deleted successfully!');
  });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
