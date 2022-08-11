        /* paramters of summon minion function of safeminionsummoner

        address _moloch,
        address _avatar,
        string memory _details,
        uint256 _minQuorum,
        uint256 _saltNonce

        */
async function main() {
  const accounts = await ethers.getSigners()

  console.log(
    'Accounts:',
    accounts.map((a) => a.address)
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
