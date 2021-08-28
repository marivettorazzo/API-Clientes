const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "Cliente_id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Nome" varchar(255),
    "Cep" varchar(10),
    "NumeroRes" varchar(10),
    "Telefone" varchar(64)
  );
  `

const ADD_CLIENTES_DATA =`
INSERT INTO CLIENTES (Cliente_id,Nome,Cep,NumeroRes,Telefone)
VALUES 
    (1, 'Eugênio Oliveira', '11122255', '235','17-95252638'),
    (2, 'joão Ribeiro', '66699558', '852','17-956239874'),
    (3, 'José Antonio', '52556598', '159','17-952525652'),
    (4, 'Marcelina de Moraes', '89669326', '963','17-952321265'),
    (5, 'Oswaldo Santos', '56932614', '258','17-985741475'),
    (6, 'José Ribamar', '78932145', '741','17-982255221'),
    (7, 'Mariele Santos', '12369854', '147','17-946794658'),
    (8, 'Fernanda Abreu', '74185236', '369','17-977778552'),
    (9, 'Lima Duarte', '78965481', '321','17-965477141');
`

function criaTabelaClientes() {
    db.run(CLIENTES_SCHEMA, (error)=> {
       if (error) console.log(`Erro ao criar tabela de usuários${error}`);
    });
};


function populaTabelaClientes() {
    db.run(ADD_CLIENTES_DATA, (error)=> {
       if (error) console.log(`Erro ao popular tabela de usuários${error}`);
    });
};

db.serialize(()=> {
    criaTabelaClientes();
   populaTabelaClientes();
    
});
