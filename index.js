//
class Heroi {
    constructor(nome, idade, tipoVocacao){
        this.nome = nome
        this.idade = idade
        this.tipoVocacao = tipoVocacao
    }

    
    atacar() {
        switch(this.tipoVocacao) {
            case "Mago":
                console.log(`O ${this.tipoVocacao} atacou usando MAGIA`)
                break;
            case "Guerreiro":
                console.log(`O ${this.tipoVocacao} atacou usando ESPADA`)
                break;
            case "Monge":
                console.log(`O ${this.tipoVocacao} atacou usando ARTES MARCIAIS`)
                break;
            case "Ninja":
                console.log(`O ${this.tipoVocacao} atacou usando SHURIKEN`)
                break;
            default:
                console.log(`O ${this.tipoVocacao} atacou usando SOCO`)
        }
    }

}

let heroiUm = new Heroi("Jose",31,"Mago")
let heroiDois = new Heroi("Amanda",30,"Ninja")

console.log(heroiUm)
console.log(heroiDois)

heroiUm.atacar()
heroiDois.atacar()