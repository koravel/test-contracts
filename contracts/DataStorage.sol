// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract DataStorage {

    event SetTrxContent(bytes32 hash);

    uint256 private counter;
    mapping(bytes32 => string) private trxContent;
    address private setterAddress;

    constructor(address _setterAddress) {
        setterAddress = _setterAddress;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }

    function getTrxContentByHash(bytes32 hash) public view returns(string memory) {
        return trxContent[hash];
    }

    function setTrxContent(bytes32 hash, string memory content) public {
        require(msg.sender != address(0), "Cannot be zero");
        require(msg.sender == setterAddress, "Caller is not authorized");

        if (hash != bytes32(0)) {
            counter++;
        }

        trxContent[hash] = content;

        emit SetTrxContent(hash);
    }
}