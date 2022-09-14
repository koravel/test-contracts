const DataStorage = artifacts.require("./contracts/DataStorage.sol");

const truffleAssert = require('truffle-assertions');

contract("DataStorage", accounts => {

    let dataStorage;

    before(async () => {
        dataStorage = await DataStorage.deployed();
    });

    context("setTrxContent/getTrxContentByHash", () => {
        it("should set/get string by hex(32) key", async () => {
            let trxHash = web3.utils.randomHex(32);
            let content = "testContent";
            let caller = accounts[0];

            await dataStorage.setTrxContent(trxHash, content, {from: caller});

            let actualTrxContent = await dataStorage.getTrxContentByHash(trxHash);

            assert.strictEqual(actualTrxContent, content, "Content was not set")
        });

        it("should call revert if caller is not match", async () => {
            let trxHash = web3.utils.randomHex(32);
            let content = "testContent";
            let caller = accounts[1];

            await truffleAssert.reverts(dataStorage.setTrxContent(trxHash, content, {from: caller}));
        });
    });

    context("getCounter", () => {
        it("should return number of saved transactions", async () => {
            let counter = await dataStorage.getCounter();

            assert.strictEqual(counter.toString(), '1', "counter was not set during test")
        });
    });
});