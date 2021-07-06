const valorRoubado = wage => {
  console.log(`Seu salario bruto é ${wage.toFixed(2)}$`)
  var inss
  var ir
  if(wage > 5189.82) inss = 570.88
  if(wage < 5189.82 && wage >= 2594.93) inss = wage * 0.11
  if(wage <= 2594.92 && wage >= 1556.95 ) inss = wage * 0.09
  if(wage <= 1556.94) inss = wage * 0.08
  console.log(`De ${wage.toFixed(2)}$ voce perdeu ${inss.toFixed(2)}$ em INSS`)
  wage = wage - inss
  if(wage > 4664.68) ir = (wage * 0.275) - 869.36
  if(wage >= 3751.06 && wage <= 4664.68) ir = (wage * 0.225) - 636.13
  if(wage >= 2826.66 && wage <= 3751.05) ir = (wage * 0.15) - 354.80
  if(wage >= 1903.99 && wage <= 2826.65) ir = (wage * 0.075) - 142.80
  if(wage <= 1903.98) ir = 0
  console.log(`Seu salario ja descontado com o INSS era de ${wage.toFixed(2)}$, agora com o roubo de renda vc perdeu mais ${ir.toFixed(2)}$`)
  wage = wage - ir
  console.log(`Seu salario ficou de ${wage.toFixed(2)}$, e foi roubado ${(ir + inss).toFixed(2)}$`)
}

valorRoubado(3000)