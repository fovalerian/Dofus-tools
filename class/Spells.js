var method = Spells.prototype;
var Damage = require('./damage.js');

class Spells {
    constructor(effects,name,buff) {
        this.effects = new Damage(effects);
        this.name = name;
        this.buff = buff;
    };
};

module.exports = Spells;