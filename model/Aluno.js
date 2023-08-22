class Aluno {
    #nome
    #idade

    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }

    setNome(nome) {
        this.#nome = nome
    }
    getNome(){
        return this.#nome
    }
    setIdade(idade) {
        this.#idade = idade
    }
    getIdade(){
        return this.#idade
    }
}

module.exports = Aluno