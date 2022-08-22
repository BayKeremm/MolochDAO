async function main() {
  const summoner = await ethers.getContractFactory("SafeMinionSummoner");
  // attach the address to the contract
  const summonerAttached = await summoner.attach('0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82');
  const totalShares = await summonerAttached.totalShares();
  console.log(totalShares);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })