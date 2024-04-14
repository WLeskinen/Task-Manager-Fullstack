CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  details TEXT,
  startDate DATE,
  endDate DATE,
  status VARCHAR(255) CHECK (status IN ('In Progress', 'On Hold', 'Completed'))
);


INSERT INTO tasks (name, details, startDate, endDate, status)
VALUES ('Do homework', 'test', '2024-04-15', '2024-04-15', 'In Progress'),
       ('Hate everything', 'test 2', '2024-04-15', '2024-04-15', 'On Hold');

-- Add the rest of the commands here, so that they're easily accessible when testing--
