function Warrior(name, attack, health) {
  this.name = name;
  this.attack = attack;
  this.health = health;

  this.fight = function(target) {
    alert(this.name+" attaque "+target.name+" !!!");
    target.health = target.health - this.attack;
    alert("il reste " + target.health + "points de vie à " + target.name);
  };

}

function Magician(name, attack, health, mana){
  this.name = name;
  this.attack = attack;
  this.health = health;
  this.mana = mana;

  this.heal = function(){
    if (this.mana>=20) {
      this.health += 10;
      this.mana -= 20;
      alert(this.name +" regagne 10 points de vie et a maintenant "+this.health+" points de vie.");
    }
    else {
      alert("Pas assez de mana.");
    }
  }
  this.fight = function(target) {
    alert(this.name+" attaque "+target.name+" !!!");
    target.health = target.health - this.attack;
    alert("il reste " + target.health + "points de vie à " + target.name);
  };
}

var ryu = new Warrior("Ryu", 25, 100);
var ken = new Warrior("Ken", 20, 100);
var harry = new Magician("Harry", 15, 80, 60);

ryu.fight(ken);
ken.fight(harry);
harry.heal();
harry.fight(ken);
