const hardhat = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.7.5",
  networks: {
    develop: {
      url: "http://localhost:8545",
    },
  },
};
