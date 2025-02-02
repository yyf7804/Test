class Character {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }

    attack(target) {
        target.takeDamage(this.attack);
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    defend(damage) {
        this.takeDamage(damage);
    }
}

export default Character;