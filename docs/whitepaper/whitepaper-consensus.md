---
id: consensus_economic
title: Consensus Mechanism and Economic Model
sidebar_label: Consensus & Economic
description: Build your next blockchain app on ETM/P.
keywords:
  - docs
  - ETM/P
---

The original Bitcoin blockchain uses a consensus model referred to as
Nakamoto consensus [@nakamoto2008peer]. It uses a sequential model in
which a block is built, mined, and verified, and consensus about it is
formed by nodes building subsequent blocks on top of it, based on the
longest chain rule. While the proof-of-work challenge (mining) that must
be solved for every block provides tamper-resistance for the chain, the
associated computational effort decides Poisson winning rate. Proof of
Work consensus mechanism leads to waste of computational resources and
constraints on scalability.

The leading proposals for removing the constraints and resource
consumptions of proof-of-work adapt Byzantine Fault Tolerant (BFT)
consensus algorithms [@kwon2014tendermint; @moniz2020istanbul]. In
general, finalizing blocks through BFT consensus requires a known set of
participants, a super-majority of which must be honest and only partial
synchrony [@lamport2019byzantine].

BFT consensus has been combined with proof-of-stake (PoS) to create
incentive mechanism for a secure and permissionless system. Under PoS,
all participating nodes are required to deposit a (financial) stake that
can be taken away if they violate the protocol's rules. The amount of
influence given to each node is proportional to its fraction of total
stake. Then the economic pressure (i.e., the stake at risk) to follow
the protocol is correlated with a node's influence. In addition, the
deposited stake has the added benefit of preventing Sybil attacks. PoS
system, compared to Proof of Work systems, is more efficient in
utilizing capital costs while maintaining the security and temper proof
nature of the chain. Most of the projects in the current Web3 blockchain
world are based on PoS, including Ethereum2.0, Solana, Polkadot,
Algorand etc..

The ETM/P consensus mechanism is based on delegated Proof of Stake
(DPoS). Like PoS, DPoS allocates token inflation rewards and governing
power based on the state distribution and staked value of the nodes.
DPoS differs from PoS in two aspects:

-   There is a relatively small number of validation nodes during each
    epoch and they are usually identified in terms of reputation and
    security, in addition to holding large amount of stake;

-   Other nodes may delegate their stake to the large stake holders and
    share the reward directly via contracting.

Recent events and theoretical analysis may illustrate the advantages of
using Delegated Stake of Proof mechanism.

-   Efficiency, scalability and operational stability. Many academic
    works have shown that Byzantine Byzantine Fault Tolerant (BFT)
    consensus algorithms, without assuming a global synchrony, need a
    certain degree of centralization to ensure safety and liveness
    [@harvey2021defi]. Many public blockchains have tried to solve this
    problem by various means but have not fully resolved this problem.
    For example, Solana has had multiply times of breakdown due to
    synchrony issues. Layer 2 solutions, such as optimism, has been
    exposed to attacks. Restricting the proposition and validations of
    blocks to a small number of accredited nodes can apparently improve
    stability.

-   Economic stability. The staking reward and transaction fee reward
    are the engines of growth and there is a natural demand for
    participation. In Ethereum2.0, there exists a high threshold (32ETH
    and indefinite lockup time) to become validators. The demand of
    participation engendered third party DeFi services such as Lido and
    derivative product like stETH. This has been one of the causes of
    recent market collapse and has led to the instability of ETH token
    system. With Delegated Stake of Proof mechanism, small stake holders
    can easily participate by voting, staking and rewards sharing with
    known, accredited nodes in the system.

-   The Delegated Stake of Proof mechanism does not undermine
    decentralization. Each node has sufficient autonomy both
    economically and in terms of expressing its view, since each node
    can choose to stake or un-stake at any given time, by itself or
    delegate to any node of its choice. Moreover, the ETM DAO
    (Decentralized Autonomous Organization) will provide a fertile
    ground for the exchanges of ideas and information communication.

The ETM token is the native and governance token of the ETM/P
blockchain. It is used as the medium of exchange and store of value in
the ETM infrastructure. ETM token has several important characteristics
that make it the ideal currency for Web3.0 applications and DeFi2.0. It
is completely compatible with ERC standards, with regulated inflation
and broad distribution. Transactions can be done on ETM/P main net with
low fees and deterministic finality. By design of the blockchain, a
scalable fully replicated structure that is shared among all
participants and guarantees a consistent view of all user transactions
by all participants in the ETM system.

The on-chain governance of Decentralized Autonomous Organization (DAO)
and the distribution of inflated ETM/P token depend on the staking
mechanism. Moreover, staking mechanism in ETM/P is essential to the
consensus mechanism and economic incentive. As a Delegated Proof of
Stake blockchain, the ETM/P requires potential validators nodes to lock
up a security deposit denominated in ETM/P tokens in a smart contract,
in order to participate in the random selections of validators for each
round. Staking prevents low cost "sybil" attacks (where one actor
masquerades as many individuals to gain undue influence over the
network) and acts as a deposit that can be slashed if the validator
attempts to commit malicious behaviors. The probability of a node
becoming an actual validator is determined by the proportion of its
stake vis a vis the total stake escrowed in this smart contract. 21
validators are re-elected in each round. Within each round, these
validators process the transaction on the main net according to the
Istanbul Byzantine fault tolerant consensus mechanism. The ordering of
these 21 nodes is subjected to persistent permutations. Validators
receive rewards in 3 ways:

-   Validators receive staking reward, distributed via the dynamic
    equilibrium mechanism from the token inflation.

-   Validators receive a portion of transaction fees.

-   Validators benefit from the value increase of the ETM token in the
    long term.

All rewards are denominated in the ETM/P tokens. This incentivize the
validators to act dutifully in the validation process and safeguard the
ETM system.

Staking is an essential part of the ETM economic system: it helps to
stabilize the token circulation and demand. Staking reward, generated
from the aggregate token inflation, is not uniquely distributed to
validators. Anyone with ETM tokens can stake to earn reward, much like
earning interests from a banking system. The ETM staking reward design
achieves the following objectives:

-   The staking reward is allocated with fixed inflation in the token
    system.

-   Staking reward per token (marginal reward) increases when staking
    ratio is low, decreases when the ratio is high.

-   Staking reward per token (marginal reward) is adjusted dynamically
    via a feedback mechanism and changes with the creation of each new
    block, roughly in every 3 seconds. We call this real time dynamic
    rebalancing.

The fixed inflation schedule serves to preserve scarcity of the ETM/P
token and protect the interests of token holders. On the other hand,
excessive inflation can create a range of unintended consequences and
causes downward pressure on the token prices (denominated by the
stablecoins, for example). Therefore, staking reward needs to be
carefully tuned to balance between bounded inflation and incentive for
staking nodes. This is also important for attracting new users and
expanding the ecosystem. Since all rewards are denominated in ETM/P
tokens, even though high reward may boost the inflow of new users in the
short term, the potential devaluation of the native token caused by high
inflation will discourage users in the long term.

The automatic adjustments of the parameters to control the ETM/P
economic system is guided by the real time dynamic rebalancing. This is
one of the key features and main innovations of ETM/P for optimizing
user incentives and achieving a stable dynamic equilibrium. By updating
smart contract aggregate variables after each block, triggered by
interaction of users with the smart contract itself, the dynamic
equilibrium mechanism improves the reward transparency and price
continuity in the economic system. Users can engage more actively in
transactions with less risk. Moreover, the smart contracts of ETM/P use
dynamic, data driven models to manage risk and provide value to the
users.

We outline some details of the real time dynamic rebalancing mechanism
and how it achieves a state of equilibrium:

The first year inflation rate is $i=0.1$ and will be adjusted year by
year. For more details we refer to the section on ETM tokenomics. We can
then calculate the inflation per each block. Let $i_n$ denotes the
inflation rate per block, since inflation is always compounded we have

$$n=20\times 60\times 24\times 365=10512000.$$

$$(1+i_n)^n=1+i, \,\,\,\ln(1+i_n)=\frac{1}{n}\ln(1+i).$$
Since $i_n$ is very small, we can use the formula $\ln(1+i_n)\approx i_n$ and obtain

$$i_n=\frac{1}{n}\ln(1+i).$$ 

We can then calculate the reward to be
distributed after each block. Each validator can claim its reward
according to its proportion in the staking pool. With the action of each
node (stake, un-stake), the smart contract recalculates and updates the
current distribution of the staking pool.

We can obtain a simple estimate of the APY given the current data. Let
$B_n$ denotes the total token in circulation at the time of block $n$
and $S_n$ denotes the number of tokens staked. $r_n$ denotes the reward
per token of the each staking node.

$$S_n\times r_n=B_n\times i_n \times(1-\delta).$$

Let $\delta$ denotes the direct allocation of the inflation to reward the validators for performing their duties, for now let $\delta=0$. When $S_n/B_n$ is
small, marginal reward will automatically increase to incentivize
staking. On the other hand, marginal reward will decrease when
$S_n/B_n$, in order to incentivize the utilization of the token.

Suppose $B/S$ remains constant, it can be used to estimate the APY, such
that

$$r=(1+r_n)^n=(1+\frac{B}{S}\cdot \frac{1}{n}\ln(1+i))^n \approx (i+1)^{B/S}.$$

This will help the validator estimates the potential P&L and makes
decisions dynamically. However, it should be noted this estimate may be
far from the true APY as one cannot predict the fluctuation of $S_n/B_n$
as $n$ changes.

It is worth noting that, by smart contract structural design, rational
agents in the ETM economic system are incentivized to use feedback
control strategies. A feedback control strategy means that implementing
the optimal control as a simple deterministic function evaluation at the
current state of the system. More concretely, a node searching seeking
to maximize stake yield will adjust its token asset allocation by
observing the aggregate staking ratio. The feedback control allows us to
understand the cause of a decision, and explain its dependence on the
state dynamics and policy constraints. A feedback control also allows us
to justify the fairness of the token distribution mechanism.

The prospect of modeling and numerical simulation for ETM economic
system goes far beyond simple APY estimation. By implementing real time
dynamic rebalancing mechanism, ETM opens the door to the wide
applications of continuous time financial models, forward backward
stochastic differential equations and partial differential equations.
Systemic risk, liquidation risk and all kinds of factors can be modeled
and simulated much more accurately in the ETM economic system than
previous PoS systems. This will pave the way to the composition of
complicated financial instruments (the DeFi Lego) with data driven,
quantitative risk management.
