class Enemy {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name} for ${this.attack} damage!`);
        target.takeDamage(this.attack);
    }

    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} takes ${damage} damage! Remaining health: ${this.health}`);
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated!`);
        }
    }
}

export default Enemy;