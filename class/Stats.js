var method = Stats.prototype;

class Stats {
    constructor (intel,chance,agi,force,puissance,dommage,dommageFeu,
        dommageEau,dommageAir,dommageTerre,dommageNeutre,name) {

      this.intel = intel;
      this.chance = chance;
      this.agi = agi;
      this.force = force;
      this.puissance = puissance;
      this.dommage =  dommage;
      this.dommageFeu = dommageFeu;
      this.dommageEau = dommageEau;
      this.dommageAir = dommageAir;
      this.dommageTerre = dommageTerre;
      this.dommageNeutre = dommageNeutre;
      this.name = name;
  
    };
};

module.exports = Stats;