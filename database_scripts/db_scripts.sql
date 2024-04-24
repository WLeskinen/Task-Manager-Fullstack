-- Table for Status --
CREATE TABLE Status (
    Id SERIAL PRIMARY KEY,
    Title VARCHAR(100),
    Style VARCHAR(50)
);


-- Table for ActivityType --
CREATE TABLE ActivityType (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(100)
);

-- Table for creating Activities --
CREATE TABLE Activities (
    Id SERIAL PRIMARY KEY,
    Title VARCHAR(100),
    Description TEXT,
    StartDate TIMESTAMP,
    EndDate TIMESTAMP,
    Url VARCHAR(255),
    statusId INT,
    activityTypeId INT,
    CONSTRAINT fk_status FOREIGN KEY (statusId) REFERENCES Status(Id),
    CONSTRAINT fk_activity_type FOREIGN KEY (activityTypeId) REFERENCES ActivityType(Id)
);

--TABLE CREATION FOR TASKS--
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    details TEXT,
    startDate DATE,
    endDate DATE,
    status VARCHAR(255) CHECK (status IN ('In Progress', 'On Hold', 'Completed')),
    activityId INT,
    CONSTRAINT fk_activity FOREIGN KEY (activityId) REFERENCES Activities(Id)
);






--INSERTING DATA INTO OUR TASK TABLES--
INSERT INTO tasks (name, details, startDate, endDate, status)
VALUES ('Do homework', 'test', '2024-04-15', '2024-04-15', 'In Progress'),
       ('Hate everything', 'test 2', '2024-04-15', '2024-04-15', 'On Hold');




-- Add the rest of the commands here, so that they're easily accessible when testing-