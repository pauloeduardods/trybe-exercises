const mage = {
  healthPoints: 230,
  intelligence: 45,
  mana: 145,
  damage: undefined,
};

const warrior = {
  healthPoints: 275,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 1002,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const defaultMageStats = Object.assign({}, mage);

const defaultWarriorStats = Object.assign({}, warrior);

const defaultDragonStats = Object.assign({}, dragon);

const dragonDamage = () => 15 + Math.floor(Math.random() * (dragon.strength - 15));

const warriorDamage = () => warrior.strength + Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength));

const mageDamage = () => {
  const result = {
    damage: mage.intelligence + Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)),
    mana: 15
  }
  if (mage.mana >= 15) {
    return result;
  }
  result.damage = 'Não possui mana suficiente';
  result.mana = 0
  return result;
};

const gameActions = {
  warrior: (func) => {
    const warriorDamage = func();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mage: (func) => {
    const {damage, mana} = func();
    if (!isNaN(damage)) dragon.healthPoints -= damage;
    mage.damage = damage;
    mage.mana -= mana;
  },
  dragon: (func) => {
    const dragonDamage = func();
    dragon.damage = dragonDamage;
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
  },
  result: () => battleMembers,
};

const printStats = () => console.log(gameActions.result());

const playGame = (print = () => {}) => {
  print();
  gameActions.warrior(warriorDamage);
  gameActions.mage(mageDamage);
  if (dragon.healthPoints <= 0) {
    print();
    return 'Dragon Lose';
  }
  gameActions.dragon(dragonDamage);
  if (warrior.healthPoints <= 0 && mage.healthPoints <= 0) {
    print();
    return 'Dragon Win';
  }
}

const startNewGame = (game) => {
  for (let i = 0; i < i + 1; i += 1) {
    const gameResult = game();
    if (gameResult) {
      Object.assign(mage, defaultMageStats);
      Object.assign(warrior, defaultWarriorStats);
      Object.assign(dragon, defaultDragonStats);
      return gameResult;
    }
  }
}

function statistics() {
  let dragonWin = 0;
  let dragonLose = 0;
  for (let i = 0; i < 100000000; i += 1) { // + ou - 1 min com 100000000
    const result = startNewGame(playGame);
    if (result === 'Dragon Win') dragonWin += 1;
    else dragonLose += 1;
  }
  console.log(`
  Dragao ganhou ${dragonWin} vezes
  Dragao perdeu ${dragonLose} vezes
  `);
}
statistics(); //usado para balancear o jogo
