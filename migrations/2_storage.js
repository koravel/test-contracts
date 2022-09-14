const DataStorage = artifacts.require("./contracts/DataStorage.sol");

module.exports = async (deployer) => {
    await deployer.deploy(DataStorage, '0xf20803aa557c3e65dab6344e15def4675ec21386');
}