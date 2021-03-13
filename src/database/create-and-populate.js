const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

//******USERS******
const USERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USERS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NAME" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64),
    "PLANO" varchar(64),
    "TIPO" varchar(64)
  );`;

const ADD_USERS_DATA = `
INSERT INTO USERS (ID, NAME, EMAIL, SENHA, PLANO, TIPO)
VALUES 
    (1, 'Daniel Basilio', 'daniel.resilia@gmail.com', '*******', 'Bronze', 'Cliente' ),
    (2, 'Amanda', 'amanda.resilia@gmail.com', '********', 'Silver' 'Funcionario'),
    (3, 'Marcus', 'marcus.resilia@gmail.com', '********', 'Gold' 'Funcionario')
`;

function createTableUsers() {
  db.run(USERS_SCHEMA, (error) => {
    if (error) console.log("Database could't create users table");
  });
}

function populateTableUsers() {
  db.run(ADD_USERS_DATA, (error) => {
    if (error) console.log("Database could't populate users table");
  });
}

// ******PLANS******

db.serialize(() => {
  createTableUsers();
  populateTableUsers();
});
