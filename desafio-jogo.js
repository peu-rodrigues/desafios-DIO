class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'Mago Elemental':
                ataque = 'disparou um jato de água da palma da mão';
                break;
            case 'Pistoleiro':
                ataque = 'atirou contra o inimigo 6 vezes';
                break;
            case 'Curandeira':
                ataque = 'curou os aliados'
                break;
            case 'Bárbaro':
                ataque = 'arremessou seu martelo';
                break;
            default:
                ataque = 'não possui um ataque conhecido';
        }

        console.log(`${this.nome}, ${this.tipo}, ${ataque}`)
    }
}

const heroi1 = new Heroi('Rafael', 19, 'Mago Elemental');
const heroi2 = new Heroi('Pedro', 25, 'Pistoleiro');
const heroi3 = new Heroi('Lilian', 48, 'Curandeira');
const heroi4 = new Heroi('José', 30, 'Bárbaro');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();