class Aluno {

    constructor(nome, idade) {
        this._nome = nome
        this._idade = idade
    }

    setNome(nome) {
        this._nome = nome
    }
    getNome(){
        return this._nome
    }
    setIdade(idade) {
        this._idade = idade
    }
    getIdade(){
        return this._idade
    }
}

module.exports = Aluno