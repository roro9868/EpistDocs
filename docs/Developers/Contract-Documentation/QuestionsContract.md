---
sidebar_position: 202
---

# Questions Contract

Question contract is the core component of Epist decentralized knowledge network.

The question tracks fee (in EPI token) generated from answering and posting questions.

The contract allows user to post question and close question.

When user can post a question with specified reward amount for answerer.
User need to set up a expired date for closing question.

Afer expired date, all unclosed question reward goes to stacking pool for the community.

Once the user pick an satisfied answer, the question owner can close the question
and reward question answerer.


## Read only methods

```
function cumulatedFee()
```

```
function feePercent()
```

```
function owner()
```

```
function questionMinAmount()
```

```
function questionInfo(string input)
```

```
function stakingPercent()
```

```
function stakingPool()
```


## Write only methods


<br/>

[Under Construction]