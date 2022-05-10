---
sidebar_position: 201
---

# Epist Token (EPI)

Epist Token (EPI) is an Ownable, Burnable, Snapshot-enabled ERC20 token. 

Please refer to https://docs.openzeppelin.com/contracts/4.x/erc20 for detailed ERC20 documentation.

## Read Only Functions

### allowance

*See {IERC20-allowance}* 
 
Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through transferFrom. This is zero by default.

This value changes when [approve](#approve) or [transferFrom](#transferfrom) are called.  
```
allowance(address owner, address spender) → uint256
```  

### balanceOf
Returns the amount of tokens owned by `account`.
```
balanceOf(address account) → uint256
```

### balanceOfAt
Retrieves the balance of `account` at the time `snapshotId` was created.
```
balanceOfAt(address account, uint256 snapshotId) → uint256
```

### name
Returns the name of the token.
```
name() → string
```

### decimals
Returns the number of decimals used to get its user representation (set to 18).
``` 
decimals() → uint8
```

### owner
Returns the address of the current owner.
```
owner() → address
```

### symbol
Returns the symbol of the token, usually a shorter version of the name.
```
symbol() → string
```

### totalSupply
Returns the amount of tokens in existence (1,000,000,000 or 1 billion for EPI)
```
totalSupply() → unit256
```
  
<br/> 

## Write Only Functions

### approve 
Sets `amount` as the allowance of `spender` over the caller’s tokens.

Returns a boolean value indicating whether the operation succeeded.

```
approve(address spender, address amount) → bool
```

### burn
Destroys `amount` tokens from the caller.
```
burn(uint256 amount)
```

### burnFrom
Destroys `amount` tokens from `account`. `amount` is then deducted from the caller’s allowance.
```
burnFrom(address account, uint256 amount)
```

### decreaseAllowance
Atomically decreases the allowance granted to `spender` by the caller.

Emits an Approval event indicating the updated allowance.
```
decreaseAllowance(address spender, uint256 subtractedValue) → bool
```

### increaseAllowance
Atomically increases the allowance granted to `spender` by the caller.

Emits an Approval event indicating the updated allowance.

```
function increaseAllowance(address spender, uint256 addedValue)
```

### renounceOwnership
Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.
```
function renounceOwnership()
```

### snapshot
Creates a new snapshot and returns its snapshot id.
Emits a Snapshot event that contains the same id.
```
function snapshot() → uint256
```

### transfer
Move `amount` tokens to the `to` address

```
function transfer(address to, uint256 amount) → bool
```

### transferFrom
Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller’s allowance.

Returns a boolean value indicating whether the operation succeeded.
```
function transferFrom(address from, address to, uint256 amount) → bool
```

### transferOwnership
Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
```
function transferOwnership(address newOwner)
```