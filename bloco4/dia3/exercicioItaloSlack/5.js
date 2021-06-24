const fee = 5/100
const calc = (totalValue, firstInstallment, numberOfInstallment) =>{
  let financedValue = totalValue - firstInstallment
  let feeValue = financedValue * fee
  let parcelValue = (financedValue + feeValue)/numberOfInstallment
  financedValue = financedValue + feeValue
  totalValue = firstInstallment + parcelValue * numberOfInstallment
  console.log(`Valor Financiado: ${financedValue.toFixed(2)}`)
  console.log(`Valor de jurus: ${feeValue.toFixed(2)}`)
  console.log(`Quantidade de parcelas ${numberOfInstallment}`)
  console.log(`Valor da parcela: ${parcelValue.toFixed(2)}`)
  console.log(`Valor total do carro: ${totalValue.toFixed(2)}`)
}

calc(3000, 1000, 2)