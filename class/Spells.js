var method = Spells.prototype;
var Damage = require('./damage.js');

class Spells {
    constructor(damage,name,buff) {
        this.damage = new Damage(damage);
        this.name = name;
        this.buff = buff;
    };
};

module.exports = Spells;