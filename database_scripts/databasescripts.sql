CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  content TEXT,
  startDate DATE,
  endDate DATE,
  tags TEXT[]
);

-- Add the rest of the commands here, so that they're easily accessible when testing--