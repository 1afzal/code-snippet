CREATE TABLE cars(
    brand VARCHAR(255),
    model VARCHAR(255),
    year INT
)

CREATE TABLE students(
    name VARCHAR(50),
    age INT,
    USN VARCHAR(11)
)

CREATE TABLE account(
    user_id serial PRIMARY_KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP
)

CREATE TABLE role(
    r_id serial PRIMARY KEY,
    role VARCHAR(255) UNIQUE NOT NULL
)
