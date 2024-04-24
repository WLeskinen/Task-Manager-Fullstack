-- Define the Status table
CREATE TABLE Status (
    Id SERIAL PRIMARY KEY,
    Title VARCHAR(255),
    Style VARCHAR(255)
);

-- Define the Tag table
CREATE TABLE Tag (
    Id SERIAL PRIMARY KEY,
    Title VARCHAR(255),
    Color VARCHAR(255)
);

-- Define the ActivityType table
CREATE TABLE ActivityType (
    Id SERIAL PRIMARY KEY,
    Title VARCHAR(255)
);

-- Define the Task table
CREATE TABLE Task (
    Id SERIAL PRIMARY KEY,
    Title VARCHAR(255),
    Description TEXT,
    StartDate DATE,
    EndDate DATE,
    status_id INT,
    tag_id INT,
    activity_type_id INT,
    FOREIGN KEY (status_id) REFERENCES Status(Id),
    FOREIGN KEY (tag_id) REFERENCES Tag(Id),
    FOREIGN KEY (activity_type_id) REFERENCES ActivityType(Id)
);

-- Added some new table data for later --

--INSERTING DATA INTO OUR TASK TABLES--
INSERT INTO tasks (name, details, startDate, endDate, status)
VALUES ('Do homework', 'test', '2024-04-15', '2024-04-15', 'In Progress'),
       ('Hate everything', 'test 2', '2024-04-15', '2024-04-15', 'On Hold');

-- Add the rest of the commands here, so that they're easily accessible when testing--
