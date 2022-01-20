require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Dz7JhSs-C2keHNPZpKsue9jRNqMzCLuY',
      accounts: ['85cba0c1835418502c2052234c90d441bd2722675b3ddceab0a8fac011c45ade'],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "FXDRJRKJPW5RF75UE9SC72FEIGKFXSE71X",
  }
};