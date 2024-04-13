const pool = require('../db');

class ActivityController {
  getAllActivities(req, res) {
    pool.query('SELECT * FROM activities', (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  }

  getActivityById(req, res) {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM activities WHERE id = $1', [id], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  }

  createActivity(req, res) {
    const { name, content, startdate, enddate, tags } = req.body;
    pool.query(
      'INSERT INTO activities (name, content, startdate, enddate, tags) VALUES ($1, $2, $3, $4, $5)',
      [name, content, startdate, enddate, tags],
      (error, results) => {
        if (error) throw error;
        res.status(201).send(`Activity added successfully!`);
      }
    );
  }

  updateActivity(req, res) {
    const id = parseInt(req.params.id);
    const { name, content, startdate, enddate, tags } = req.body;
    pool.query(
      'UPDATE activities SET name = $1, content = $2, startdate = $3, enddate = $4, tags = $5 WHERE id = $6',
      [name, content, startdate, enddate, tags, id],
      (error, results) => {
        if (error) throw error;
        res.status(200).send(`Activity modified successfully`);
      }
    );
  }

  deleteActivity(req, res) {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM activities WHERE id = $1', [id], (error, results) => {
      if (error) throw error;
      res.status(200).send(`Activity deleted successfully`);
    });
  }
}

module.exports = {
getAllActivities,
getActivityById,
createActivity,
updateActivity,
deleteActivity
};
