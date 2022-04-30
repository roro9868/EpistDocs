---
sidebar_position: 201
---

# EPITokens

EPIToken is a ERC20 with burnable function and snapshot function added.

Token contract owner is authorized to snapshot user balance.
Individual token owner can burn the token to reduce the supply.

Please refer to https://docs.openzeppelin.com/contracts/4.x/erc20 for detailed ERC20 documentation.

## Methods

#### Read only functions

Get the allowance of a spender granted by the owner account.

```
function allowance(address owner, address spender)
```

Get the account balance of token

```
function balanceOf(address account)
```

Get the account balance of token at a snapshot id

```
function balanceOfAt(address account, uint256 snapshotId)
```

Get the token name

```
function name()
```

Get the token decimal precision

```
function decimals()
```

Get the token contract owner that is authorized to do snapshot.

```
function owner()
```

Get the token symbol

```
function symbol()
```

Get the token total supply

```
function totalSupply()
```

#### Write only functions

approve spender to spend approved amount of token for token owner

```
function approve(address spender, address amount)
```

transfer token to 0 address and burn the token

```
function burn(uint256 amount)
```

transfer token to 0 address and burn the token

```
function burnFrom(address account, uint256 amount)
```

decrease spender's spending allowance amount

```
function decreaseAllowance(address spender, uint256 subtractedValue)
```

increase spender's spending allowance amount

```
function increaseAllowance(address spender, uint256 addedValue)
```

transfer token owner to address 0 so no one owns the token contract

```
function renounceOwnership()
```

snapshot the current token balance 

```
function snapshot()
```

transfer amount of token to another address

```
function transfer(address to, uint256 amount)
```

transfer amount of token to another address

```
function transferFrom(address from, address to, uint256 amount)
```

transfer token owner

```
function transferOwnership(address newOwner)
```