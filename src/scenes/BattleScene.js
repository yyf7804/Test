class BattleScene {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
        this.isBattleActive = false;
    }

    start() {
        this.isBattleActive = true;
        console.log(`战斗开始！${this.player.name} vs ${this.enemy.name}`);
        this.battleLoop();
    }

    battleLoop() {
        while (this.isBattleActive) {
            // 战斗逻辑，例如攻击、防御等
            // 这里可以添加用户输入处理和战斗结果判断
        }
    }

    end() {
        this.isBattleActive = false;
        console.log(`战斗结束！`);
    }
}

export default BattleScene;