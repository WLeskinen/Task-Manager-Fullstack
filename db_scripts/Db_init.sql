CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    url VARCHAR(255),
    startdate DATE,
    enddate DATE,
    status INTEGER,
    tags VARCHAR(255),
    activitytype VARCHAR(255)
);

CREATE TABLE activitytype (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE status (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    style VARCHAR(255)
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    content TEXT,
    startdate DATE,
    enddate DATE,
    tags VARCHAR(255),
    statusid INTEGER,
    activityid INTEGER
);

CREATE TABLE tag (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    color VARCHAR(255)
);
