CREATE DATABASE database_pern_todos;

CREATE TABLE todos_table(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);