const { contract, accounts } = require('@openzeppelin/test-environment');
const { constants } = require('@openzeppelin/test-helpers');
const ERC20Contract = contract.fromArtifact("ERC20FixedSupply");
const ERC20 = require('../common/ERC20');

const totalSupply = '10000';
[owner, sender, receiver, purchaser, beneficiary] = accounts;
EthValue = '10';

describe("CIH token", function () {
    it('deploy token contract', async function () {
        ERC20Param = [
            "Chain Happy",
            "CIH",
            18,
            totalSupply,
        ];
        ERC20Instance = await ERC20Contract.new(...ERC20Param, { from: owner });
    });
});

describe("test CIH baseInfo", function () {
    ERC20.baseInfo();
});
describe("test CIH extension method", async function () {
    ERC20.balanceOf(totalSupply, owner, 'owner balance');
});
