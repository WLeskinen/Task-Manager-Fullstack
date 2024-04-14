CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  content TEXT,
  startDate DATE,
  endDate DATE,
  tags TEXT[]
);

-- Add the rest of the commands here, so that they're easily accessible when testing--

CREATE TABLE Tasks (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    details TEXT,
    startDate DATE,
    endDate DATE,
    status VARCHAR(50)
);
