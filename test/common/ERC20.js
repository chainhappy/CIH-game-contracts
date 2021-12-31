const assert = require('assert');
const { ether, constants, expectEvent } = require('@openzeppelin/test-helpers');
exports.baseInfo = () => {
    it('token name: ', async function () {
        assert.equal(ERC20Param[0], await ERC20Instance.name());
    });
    it('token symbol: ', async function () {
        assert.equal(ERC20Param[1], await ERC20Instance.symbol());
    });
    it('token decimals: ', async function () {
        assert.equal(ERC20Param[2], (await ERC20Instance.decimals()).toString());
    });
    it('token totalSupply: ', async function () {
        assert.equal(ether(ERC20Param[3]).toString(), (await ERC20Instance.totalSupply()).toString());
    });
}
exports.totalSupply = (totalSupply) => {
    it('totalSupply()', async function () {
        assert.equal(ether(totalSupply).toString(), (await ERC20Instance.totalSupply()).toString());
    });
}
exports.balanceOf = (balance, account, desc) => {
    it(desc + ': balanceOf()', async function () {
        assert.equal(ether(balance).toString(), (await ERC20Instance.balanceOf(account)).toString());
    });
}
exports.transfer = (sender, receiver, amount, desc, reject, msg) => {
    it(desc + ': transfer()', async function () {
        if (reject) {
            await assert.rejects(ERC20Instance.transfer(receiver, ether(amount), { from: sender }), msg);
        } else {
            let receipt = await ERC20Instance.transfer(receiver, ether(amount), { from: sender });
            expectEvent(receipt, 'Transfer', {
                from: sender,
                to: receiver,
                value: ether(amount),
            });
        }
    });
}
exports.approve = (sender, receiver, amount, desc, reject, msg) => {
    it(desc + ': approve()', async function () {
        if (reject) {
            await assert.rejects(ERC20Instance.approve(receiver, ether(amount), { from: sender }), msg);
        } else {
            let receipt = await ERC20Instance.approve(receiver, ether(amount), { from: sender });
            expectEvent(receipt, 'Approval', {
                owner: sender,
                spender: receiver,
                value: ether(amount),
            });
        }
    });
}
exports.transferFrom = (owner, sender, receiver, amount, desc, reject, msg) => {
    it(desc + ': transferFrom()', async function () {
        if (reject) {
            await assert.rejects(ERC20Instance.transferFrom(owner, receiver, ether(amount), { from: sender }), msg);
        } else {
            let receipt = await ERC20Instance.transferFrom(owner, receiver, ether(amount), { from: sender });
            expectEvent(receipt, 'Transfer', {
                from: owner,
                to: receiver,
                value: ether(amount),
            });
        }
    });
}
exports.allowance = (owner, sender, amount, desc) => {
    it(desc + ': allowance()', async function () {
        assert.equal(ether(amount), (await ERC20Instance.allowance(owner, sender)).toString());
    });
}
exports.increaseAllowance = (sender, receiver, amount, desc, reject, msg) => {
    it(desc + ': increaseAllowance()', async function () {
        if (reject) {
            await assert.rejects(ERC20Instance.increaseAllowance(receiver, ether(amount), { from: sender }), msg);
        } else {
            let receipt = await ERC20Instance.increaseAllowance(receiver, ether(amount), { from: sender });
            expectEvent(receipt, 'Approval', {
                owner: sender,
                spender: receiver,
            });
        }
    });
}
exports.decreaseAllowance = (sender, receiver, amount, desc, reject, msg) => {
    it(desc + ': decreaseAllowance()', async function () {
        if (reject) {
            await assert.rejects(ERC20Instance.decreaseAllowance(receiver, ether(amount), { from: sender }), msg);
        } else {
            let receipt = await ERC20Instance.decreaseAllowance(receiver, ether(amount), { from: sender });
            expectEvent(receipt, 'Approval', {
                owner: sender,
                spender: receiver,
            });
        }
    });
}
exports.burn = (sender, amount, desc, reject, msg) => {
    it(desc + ': burn()', async function () {
        if (reject) {
            await assert.rejects(ERC20Instance.burn(ether(amount), { from: sender }), msg);
        } else {
            let receipt = await ERC20Instance.burn(ether(amount), { from: sender });
            expectEvent(receipt, 'Transfer', {
                from: sender,
                to: constants.ZERO_ADDRESS,
                value: ether(amount),
            });
        }
    });
}

