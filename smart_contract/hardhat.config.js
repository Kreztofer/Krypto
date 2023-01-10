require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/dd_AUvbfJzse_LDAYDkCLgcxlIuqAFEw',
      accounts: [
        'c2bc8c90f93a55c12be69d0c8b7c64b7ce1f75106f5a20dcc33668cd96f634fa',
      ],
    },
  },
  etherscan: {
    apiKey: 'dd_AUvbfJzse_LDAYDkCLgcxlIuqAFEw',
  },
};
