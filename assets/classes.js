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
    
}