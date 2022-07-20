async function main(){
    const summoner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const molochAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.attach(tokenAddress);
    console.log( 'Balance of the summoner:',await token.balanceOf(summoner));
    console.log( 'allowance of the summoner to the dao:',await token.allowance(summoner,molochAddress));
    //console.log( 'total supply of the token',await token.totalSupply());
    // increase allowance
    //await token.increaseAllowance(molochAddress, 500);



}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
