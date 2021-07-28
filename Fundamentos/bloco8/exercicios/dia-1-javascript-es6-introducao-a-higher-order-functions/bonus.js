const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => 15 + Math.floor(Math.random() * (dragon.strength - 15));

const warriorDamage = () => warrior.strength + Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength));

const mageDamage = () => {
  const mana = mage.mana;
  const result = {
    damage: mage.intelligence + Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)),
    mana: 15
  }
  if (mana >= 15) {
    mage.mana -= 15;
    return result;
  }
  result.damage = 'Não possui mana suficiente';
  result.mana = 0
  return result;
};

console.log(dragonDamage())
console.log(warriorDamage(), 'warrior')
console.log(mageDamage())