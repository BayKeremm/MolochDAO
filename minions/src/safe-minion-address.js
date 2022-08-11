async function main() {

  const summoner = await ethers.getContractFactory("SafeMinionSummoner");
  // attach the address to the contract
  const summonerAttached = await summoner.attach('0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82');
  const firstMinion = await summonerAttached.minionList(0);
  console.log(firstMinion);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })