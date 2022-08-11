async function main() {
  const accounts = await ethers.getSigners()

  console.log(
    'Accounts:',
    accounts.map((a) => a.address)
  )
  
  
  const SafeMinion = await ethers.getContractFactory('SafeMinion')
  const SafeMinionSummoner = await ethers.getContractFactory('SafeMinionSummoner')

  console.log('ready for deploy')

  const safeMinionTemplate = (await SafeMinion.deploy({gasLimit: 3000000, gasPrice: 50000000000})); //  this is the master copy 

  await safeMinionTemplate.deployTransaction.wait()

  // this is the summoner where you create a new proxy and point it to the master copy of safe minion
  const safeMinionSummoner = (await SafeMinionSummoner.deploy(
    safeMinionTemplate.address, 
    '0xdB6FC7603DdC91F027379267A3549D28E65484D5',
    '0xe41649fF5586a6d022E4402c168757982a9e09Fb',
    '0x5782b77C665e99Dc19F8d69A63E1697846d51b01',
    '0xAADFe7925b0Cad895665aDE74f5848043B8c4b7D',
    '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e',
    {gasPrice: 50000000000})); 


  console.log({
    safeMinionSummoner: safeMinionSummoner.address,
    safeMinionTemplate: safeMinionTemplate.address,
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
