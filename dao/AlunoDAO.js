const DAO = require('./DAO');

class AlunoDAO extends DAO {
  constructor(conn) {
    super(conn);
    this._tableName = "aluno";
  }

  insertAluno(aluno) {
    const sql = `INSERT INTO ${this._tableName} (nome, idade) VALUES (?, ?)`;
    const param = [aluno.getNome(), aluno.getIdade()];
    this._conn.query(sql, param, (err, result) => {
      if (err) throw err
      console.log(`Aluno inserido com sucesso`)
      return result
    });
  }

  updateAluno(aluno, id) {
    const sql = `UPDATE ${this._tableName} SET nome = ?, idade = ? WHERE id = ?`;
    const param = [aluno.getNome(), aluno.getIdade(), id];

    this._conn.promise().query(sql, param, (err, result) => {
      if (err) throw err
      console.log(`Aluno: atualizado com sucesso`)
      return result
    });
  }
}

module.exports = AlunoDAO