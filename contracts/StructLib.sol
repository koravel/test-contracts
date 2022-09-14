// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

library StructLib {
    struct Asset {
        uint256 number;
        bytes32 hash;
        bool isValuable;
    }
}
