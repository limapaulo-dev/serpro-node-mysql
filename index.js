const mySQL = require('mysql2');
const Aluno = require('./model/Aluno');
const DAO = require('./dao/DAO');
const AlunoDAO = require('./dao/AlunoDAO');

const mysqlAuthOpt = 
{ 
    host: 'localhost', 
    user: 'root', 
    password: 'mysqlpw', 
    database: 'node_mysql'
}

const conn = mySQL.createConnection(mysqlAuthOpt);

const createDB = "CREATE DATABASE IF NOT EXISTS node_mysql";
// const dropDB = "DROP DATABASE";

const createTbAluno = `CREATE TABLE IF NOT EXISTS aluno 
    (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(255),
    idade INTEGER
    )`;

const dropTbAluno = "DROP TABLE aluno";

conn.connect(err => {
    if(err) throw err
    console.log("DB Conectado")

    conn.query(createDB, (err, result => {
        if(err) throw err
        console.log("DB node_mysql criada")}))

    // conn.query(dropDB, (err, result => {
    //     if(err) throw err
    //     console.log(result)}))   

    conn.query(dropTbAluno, (err, result => {
        if(err) throw err
        console.log("Tabela Aluno apadagada")}))
        
    conn.query(createTbAluno, (err, result => {
        if(err) throw err
        console.log("Tabela Aluno criada")}))

    const aluno1 = new Aluno("Walter White", 50)
    const aluno2 = new Aluno("Jessie Pinkman", 24)
    const aluno3 = new Aluno("Jack Sparrow", 39)
    const aluno4 = new Aluno("John Locke", 52)
    const aluno5 = new Aluno("Scooby Doo", 8)
    const aluno6 = new Aluno("Luke Skywalker", 27)
    const aluno7 = new Aluno("Black Tom", 35)
    const aluno8 = new Aluno("Charles Thomas Tester", 20)
    const aluno9 = new Aluno("Some dude", 74)
    const aluno10 = new Aluno("Last dude", 44)

    const dao = new DAO(conn);
    const alunoDAO = new AlunoDAO(conn);

    alunoDAO.insertAluno(aluno1)
    alunoDAO.insertAluno(aluno2)
    alunoDAO.insertAluno(aluno3)
    alunoDAO.insertAluno(aluno4)
    alunoDAO.insertAluno(aluno5)
    alunoDAO.insertAluno(aluno6)
    alunoDAO.insertAluno(aluno7)
    alunoDAO.insertAluno(aluno8)
    alunoDAO.insertAluno(aluno9)
    alunoDAO.insertAluno(aluno10)

    alunoDAO.selectAll()

    aluno9.setNome("Tuco Salamanca")
    aluno9.setIdade(54)

    aluno10.setNome("James Gunn")
    aluno10.setIdade(25)

    alunoDAO.updateAluno(aluno9, 9)
    alunoDAO.updateAluno(aluno10, 10)

    alunoDAO.selectByID(7);
    alunoDAO.deleteByID(6);

    const result = alunoDAO.selectAll()

    conn.end()
}); 
