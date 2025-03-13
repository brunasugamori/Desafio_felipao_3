class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    atacar() {
        let ataques = {
            "mago": "magia",
            "guerreiro": "espada",
            "monge": "chackra",
            "ninja": "shuriken"
        };
        const ataque = ataques[this.tipo] || "usou um ataque desconhecido";
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const heroi1 = new Heroi("Link", 17, "guerreiro");
const heroi2 = new Heroi("Gandolf", 2000, "mago");
const heroi3 = new Heroi("Aang", 12, "monge");
const heroi4 = new Heroi("Naruto", 16, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();