const pool = require('../db');

const getAllActivities = (req, res) => {
  pool.query('SELECT * FROM activities', (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getActivityById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM activities WHERE id = $1', [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const createActivity = (req, res) => {
  const { title, description, startDate, endDate, tags, activityType } = req.body;
  pool.query(
    'INSERT INTO activities (title, description, startDate, endDate, tags, activityType) VALUES ($1, $2, $3, $4, $5, $6)',
    [title, description, startDate, endDate, tags, activityType],
    (error, results) => {
      if (error) throw error;
      res.status(201).send(`Activity added successfully!`);
    }
  );
};

const updateActivity = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, startDate, endDate, tags, activityType } = req.body;
  pool.query(
    'UPDATE activities SET title = $1, description = $2, startDate = $3, endDate = $4, tags = $5, activityType = $6 WHERE id = $7',
    [title, description, startDate, endDate, tags, activityType, id],
    (error, results) => {
      if (error) throw error;
      res.status(200).send(`Activity modified successfully`);
    }
  );
};

const deleteActivity = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('DELETE FROM activities WHERE id = $1', [id], (error, results) => {
    if (error) throw error;
    res.status(200).send(`Activity deleted successfully`);
  });
};

module.exports = {
  getAllActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity
};
