let info1 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas'
};

info1['recorrente'] = 'Sim';

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'Sim';

for(key in info){
  if(info[key] === info1[key]) console.log(`Ambos ${key}`);
  else console.log(`${info[key]} e ${info1[key]}`);
};