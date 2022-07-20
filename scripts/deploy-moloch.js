const deploymentParams = require('../deployment-params')
async function main(){
    // deploy token: needed ==> summoner + token
    const [summoner] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", summoner.address);
  
  
    const Token = artifacts.require('Token');
  
    console.log("Deploying...");
    const token = await Token.new(10000000000);
    console.log("Token address:", token.address);

    deploymentParams.SUMMONER = summoner.address;
    deploymentParams.TOKEN = [token.address];
    // deploy moloch
    console.log('Deploying a new DAO to the network ');
    console.log(
      'Deployment parameters:\n',
      '  summoner:', summoner.address, '\n',
      '  token:', token.address, '\n',
      '  periodSeconds:', deploymentParams.PERIOD_DURATION_IN_SECONDS, '\n',
      '  votingPeriods:', deploymentParams.VOTING_DURATON_IN_PERIODS, '\n',
      '  gracePeriods:', deploymentParams.GRACE_DURATON_IN_PERIODS, '\n',
      '  abortPeriods:', deploymentParams.ABORT_WINDOW_IN_PERIODS, '\n',
      '  proposalDeposit:', deploymentParams.PROPOSAL_DEPOSIT, '\n',
      '  dilutionBound:', deploymentParams.DILUTION_BOUND, '\n',
      '  processingReward:', deploymentParams.PROCESSING_REWARD, '\n'
    );

    const Moloch = artifacts.require('Moloch');

    console.log("Deploying...");
    const moloch = await Moloch.new(
      deploymentParams.SUMMONER,
      deploymentParams.TOKEN,
      deploymentParams.PERIOD_DURATION_IN_SECONDS,
      deploymentParams.VOTING_DURATON_IN_PERIODS,
      deploymentParams.GRACE_DURATON_IN_PERIODS,
      deploymentParams.PROPOSAL_DEPOSIT,
      deploymentParams.DILUTION_BOUND,
      deploymentParams.PROCESSING_REWARD
    );

    console.log("");
    console.log('Moloch DAO deployed. Address:', moloch.address);
    console.log("Set this address in buidler.config.js's networks section to use the other tasks");

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
