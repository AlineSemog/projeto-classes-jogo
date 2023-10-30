class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

       atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
                break;
        }

      
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}


const heroi1 = new Heroi("Herói Mago", 25, "mago");
const heroi2 = new Heroi("Herói Guerreiro", 30, "guerreiro");
const heroi3 = new Heroi("Herói Monge", 28, "monge");
const heroi4 = new Heroi("Herói Ninja", 22, "ninja");


heroi3.atacar();
