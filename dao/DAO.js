class DAO {
  constructor(conn) {
    this._conn = conn;
    this.tableName = "tableName";
  }

  selectAll() {
    const sql = `SELECT * FROM ${this.tableName}`;

    this._conn.query(sql, (err, result) => {
      if (err) throw err;
      console.log(`Tabela ${this.tableName}: busca efetuada com sucesso.`);
      console.log(result);
      return result;
    });
  }

  selectByID(id) {
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    const param = [id];

    this._conn.query(sql, param, (err, result) => {
      if (err) throw err;
      console.log(`Busca por ID efetuada com sucesso.`);
      return result;
    });
  }

  deleteByID(id) {
    const sql = `DELETE FROM ${this.tableName} WHERE id = ?`;
    const param = [id];

    this._conn.query(sql, param, (err, result) => {
      if (err) throw err;
      console.log(`Tabela ${this.tableName}: elemento apagado com sucesso`);
      return result;
    });
  }
}

module.exports = DAO