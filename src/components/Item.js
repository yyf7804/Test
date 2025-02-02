class Item {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    use() {
        console.log(`${this.name} has been used.`);
    }
}

export default Item;