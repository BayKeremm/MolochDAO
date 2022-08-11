async function main() {
  const accounts = await ethers.getSigners();

  console.log(
    "Accounts:",
    accounts.map((a) => a.address)
  );
  const moduleProxyFactory = await ethers.getContractFactory("ModuleProxyFactory");

  const moduleProxy  = await moduleProxyFactory.deploy();

  await moduleProxy.deployTransaction.wait();

  console.log("module proxy factory deployed");

  console.log("waiting for deployment");

  console.log({
    moduleProxy: moduleProxy.address,
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
