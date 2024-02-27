class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        return this._life = newLife < 0 ? 0 : newLife;
    }
}

class Sorcerer extends Character {

    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 16;
        this.defense = 5;
        this.maxLife = this.life;
    }
}
class Knight extends Character {

    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}
class LittleMonster extends Character {

    constructor() {
        super('Little Monster');
        this.life = 50;
        this.attack = 6;
        this.defense = 6;
        this.maxLife = this.life;
    }
}
class BigMonster extends Character {

    constructor() {
        super('Big Monster');
        this.life = 120;
        this.attack = 12;
        this.defense = 10;
        this.maxLife = this.life;
    }
}

class Stage {

    constructor(player1, player2, player1El, player2El,logObject) {
        this.player1 = player1;
        this.player2 = player2;
        this.player1El = player1El;
        this.player2El = player2El;
        this.log = logObject;
    }

    start() {
        this.update();

        this.player1El.querySelector('.fight__button').addEventListener('click', () => this.clickAttack(this.player1, this.player2));
        this.player2El.querySelector('.fight__button').addEventListener('click', () => this.clickAttack(this.player2, this.player1));
    }

    update() {
        // Player 1
        this.player1El.querySelector('.player').innerHTML = this.player1.name;
        let p1Pct = (this.player1.life / this.player1.maxLife) * 100;
        this.player1El.querySelector('.bar').style.width = `${p1Pct}%`
        this.player1El.querySelector('.hp').innerHTML = `${(this.player1.life).toFixed(0)} HP`

        // Player 2
        this.player2El.querySelector('.player').innerHTML = this.player2.name;
        let p2Pct = (this.player2.life / this.player2.maxLife ) * 100;
        this.player2El.querySelector('.bar').style.width = `${p2Pct}%`
        this.player2El.querySelector('.hp').innerHTML = `${(this.player2.life).toFixed(0)} HP`


    }

    clickAttack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage('Você não pode atacar !');
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        let trueDamage = (actualAttack - actualDefense).toFixed(2);

        if (actualAttack > actualDefense) {
            
            attacked.life -= trueDamage;
            this.log.addMessage(`${attacking.name} causou ${trueDamage} em ${attacked.name}`)
        } else {
            this.log.addMessage(`${attacked.name} conseguiu defender`)
        }

        this.update();
    }
}

class Log {
    list = [];

    constructor(listEl){
        this.listEl = listEl;
    }

    addMessage(msg){
        this.list.unshift(msg);
        this.render();
    }

    render(){
        this.listEl.innerHTML = '';
        
        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}