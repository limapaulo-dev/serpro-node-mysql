class DAO {
  constructor(conn) {
    this._conn = conn;
    this._tableName = "tableName";
  }

  selectAll() {
    const sql = `SELECT * FROM ${this._tableName}`;

    this._conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`Tabela ${this._tableName}: busca efetuada com sucesso.`);
      console.log(result);
      return result;
    });
  }

  selectByID(id) {
    const sql = `SELECT * FROM ${this._tableName} WHERE id = ?`;
    const param = [id];

    this._conn.query(sql, param, (err, result) => {
      if (err) throw err;
      console.log(`Busca por ID efetuada com sucesso.`);
      console.log(result);
      return result;
    });
  }

  deleteByID(id) {
    const sql = `DELETE FROM ${this._tableName} WHERE id = ?`;
    const param = [id];

    this._conn.query(sql, param, (err, result) => {
      if (err) throw err;
      console.log(`Tabela ${this._tableName}: elemento apagado com sucesso`);
      console.log(result);
      return result;
    });
  }
}

module.exports = DAO