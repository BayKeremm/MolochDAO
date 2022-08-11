const hardhat = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
     {
        version: "0.7.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }, {
        version: "0.7.5",
      }
    ]
  },
  networks: {
    develop: {
      url: "http://localhost:8545",
    },
  },
};
