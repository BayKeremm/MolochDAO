        /* paramters of summon minion function of safeminionsummoner

        address _moloch,
        address _avatar,
        string memory _details,
        uint256 _minQuorum,
        uint256 _saltNonce

        */
async function main() {

  const summoner = await ethers.getContractFactory("SafeMinionSummoner");
  // attach the address to the contract
  const summonerAttached = await summoner.attach('0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82');

  const ret = await summonerAttached.summonMinion("0x0B306BF915C4d645ff596e518fAf3F9669b97016","0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266","helo",0,0);

  console.log("summoned", ret);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  /*
  safeMinionSummoner: '0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82',
  safeMinionTemplate: '0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0'
  */