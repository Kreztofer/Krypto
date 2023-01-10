const hre = require('hardhat');

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function main() {
  const HelloWorld = await hre.ethers.getContractFactory('HelloWorld');
  const contract = await HelloWorld.deploy();

  await contract.deployed();

  console.log(`Contract deployed to ${contract.address}`);

  //Delay

  await sleep(15 * 1000);

  await hre.run('verify:verify', {
    address: contract.address,
    constructorArguments: [],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
