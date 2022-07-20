async function main(){

    const summoner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const account3 = "0x90F79bf6EB2c4f870365E785982E1f101E93b906";
    const molochAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const Moloch = await ethers.getContractFactory("Moloch");
    const moloch = await Moloch.attach(molochAddress,{from:summoner});

    const details = "first proposal";
    await moloch.processProposal(0);

    console.log('processed proposal');

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
