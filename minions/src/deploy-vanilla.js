async function main() {
  const accounts = await ethers.getSigners();

  console.log(
    "Accounts:",
    accounts.map((a) => a.address)
  );
  const VanillaMinion = await ethers.getContractFactory("VanillaMinion");
  const VanillaMinionSummoner = await ethers.getContractFactory(
    "VanillaMinionFactory"
  );
  console.log("contracts are ready for deployment");

  const vanillaMinionTemplate = await VanillaMinion.deploy();

  await vanillaMinionTemplate.deployTransaction.wait();

  console.log("vanilla deployed");

  const vanillaMinionSummoner = await VanillaMinionSummoner.deploy(
    vanillaMinionTemplate.address
  );

  console.log("waiting for deployment");

  console.log({
    vanillaMinionSummoner: vanillaMinionSummoner.address,
    vanillaMinionTemplate: vanillaMinionTemplate.address,
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
