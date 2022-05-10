---
sidebar_position: 202
---

# EPI Question

EPIQuestion contract is at the core of the Epist decentralized knowledge network.

## Structs
### Question
```
struct Question { 
    address owner;
    bool active;
    uint256 startBlock;
    uint256 expireAfter;
    uint256 delegateAmount;
}
```

## Read Only Functions
### cumulatedFee
Returns the amount of cumulatedFee. 
```
function cumulatedFee() → uint256
```

### feePercent
Returns the percentage of platform fees. 
```
function feePercent() → uint256
```

### owner
Returns the address of the current owner.
```
function owner() → address
```

### questionMinAmount
Returns the minimum amount of tokens required to post a question. 
```
function questionMinAmount() → uint256
```

### questionInfo
Returns a `Question` of the ID `input`

*See [Question](#question)*
```
function questionInfo(string input) → Question
```

### stakingPercent
Returns the percentage of token amounts going to the staking pool
```
function stakingPercent() → uint256
```

### stakingPool
Returns the address of the staking pool
```
function stakingPool() → address
```

## Write Only Functions

### adjustFeePercent
Adjusts the fee percentage to `_feePercent`. 

```
adjustFeePercent(uint256 _feePercent) public onlyOwner 
```

### adjustQuestionMinAmount
Adjusts minimum token amount to post a question to `_questionMinAmount`. 

```
adjustQuestionMinAmount(uint256 _questionMinAmount) public onlyOwner
```

### adjustStakingPercent
Adjusts the percentage of tokens going to the staking pool to `_stakingPercent`. 

```
adjustStakingPercent(uint256 _stakingPercent) public onlyOwner
```

### closeExpiredQuestion
Close out all Question specified by `ids`. 

Requirements:  
- Requires every Question in `ids` is open (not closed)
- Requires every Question in `ids` is expired

[TBD]

```
closeExpiredQuestion(string[] ids) external onlyOwner
```

### closeQuestion
Closes the Question of `id`. Increases counter for `cumulatedFee`. Transfers staking rewards to the staking pool address and corresponding rewards to addresses in `account` based on weights in `weight`. 

Emits an event questionClosed. 

Requirements:  
- Requires the the owner of Question of `id` is the same as msg.sender
- Requires that the Question of `id` is still open (not closed)
- Requires each of the `weight` parameters must not exceed 100
- Requires that the owner (same as msg.sender) must not be one of the addresses in `account`
- Requires all token amount in the Question of `id` is distributed or added to   `cumulatedFee` (i.e. sum of `weight` is 100)
```
closeQuestion(string id, address[] account, uint256[] weight) public
```

### postQuestion
Transfers `amount` tokens from msg.sender to this contract, and creates a new [Question](#question). 

Emits an event questionCreated. 

Requirements:  
- Requires the msg.sender has at least the `amount` token balance
- Requires `amount` to be greater than the [questionMinAmount](#questionminamount)
- Requires `id` to be unique and not a duplicate of any prior questions
- Requires that this contract has approval balance of at least `amount` to transfer tokens
```
postQuestion(string id, uint256 amount, uint256 expireAfter) public
```

### renounceOwnership
Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. 

*Only allowed to be excuted by the owner of the contract*
```
function renounceOwnership()
```

### transferOwnership
Transfers ownership of the contract to a new account (`newOwner`).

*Only allowed to be excuted by the owner of the contract*
```
function transferOwnership(address newOwner)
```


### withdrawTeamFee
Withdraws cumulated team fee to the msg.sender (same as the owner of the contract)
*Only allowed to be excuted by the owner of the contract*
```
withdrawTeamFee() public onlyOwner
```