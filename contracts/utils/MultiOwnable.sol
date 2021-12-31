// SPDX-License-Identifier: MIT
// File: contracts/utils/MultiOwnable.sol
pragma solidity 0.8.0;

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there are accounts that can be granted exclusive access to
 * specific functions.
 */
abstract contract MultiOwnable {
    mapping(address => bool) private _owners;

    event OwnershipAdded(address indexed owner);
    event OwnershipRemoved(address indexed owner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor() {
        _owners[msg.sender] = true;
        emit OwnershipAdded(msg.sender);
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function isOwner(address addr) public view returns (bool) {
        return _owners[addr];
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwners() {
        require(
            _owners[msg.sender],
            "MultiOwnable: caller is not one of the owners"
        );
        _;
    }

    /**
     * @dev Remove the sender from owners
     */
    function renounceOwnership() public virtual onlyOwners {
        removeOwnership(msg.sender);
    }

    /**
     * @dev Adds ownership of the contract to a new account (`newOwner`).
     * Can only be called by any current owner.
     */
    function addOwnership(address newOwner) public virtual onlyOwners {
        require(
            newOwner != address(0),
            "MultiOwnable: new owner is the zero address"
        );
        _owners[newOwner] = true;
        emit OwnershipAdded(newOwner);
    }

    /**
     * @dev Adds ownership of the contract to a new account (`newOwner`).
     * Can only be called by any current owner.
     */
    function removeOwnership(address owner) public virtual onlyOwners {
        require(
            owner != address(0),
            "MultiOwnable: new owner is the zero address"
        );
        _owners[owner] = false;
        emit OwnershipRemoved(owner);
    }
}
