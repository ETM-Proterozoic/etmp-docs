---
id: chaosfactor
title: Chaos Factor and Verifiable Random Permutation
sidebar_label: Chaos Factor and Verifiable Random Permutation
description: Build your next blockchain app on ETM/P.
keywords:
  - docs
  - ETM/P
---

Chaos Factor and Verifiable Random Permutation
==============================================
![image](/img/whitepaper/chaos1.png)
In this section we outline the innovative verifiable random permutation
algorithm, which adds additional security protection on top of the
Istanbul BFT consensus mechanism.

Randomness is an important ingredient in designing mechanisms to
allocate resources. It is useful for achieving fairness and safety:
Everything else being equal, if a resource has to be assigned to a
person rather than another person and money cannot be used to
compensate, then randomly allocating that resource is fair from an
ex-ante point of view [@mamageishvili2020mechanism]. Meaningful use
randomness in blockchain design requires trust. One needs to ensure the
randomness mechanism cannot be manipulated, but this seems paradoxical
given the trustless nature of the decentralized system.

The creation of verifiable identity uncertainty among the validators has
always been an integral part of Proof of Stake mechanism design. It is
essential for security and decentralization that the next validator is
selected in a random yet verifiable way. Many verifiable random
functions have been proposed and used specifically for this task. In the
ETM chain validation process, the total number of validators is 21 in
each round. There are $21!$ permutations of these nodes. The consensus
mechanism will create uncertainty in the ordering of the nodes, by what
we call verifiable random permutation. We use information from the last
block of the previous round and SHA256 to create a chaos factor. Then,
this chaos factor can map into a specific permutation of the 21 nodes,
[@SLY]. This creates an ordering of the validators, uniformly
distributed among the $21!$ possible permutations, and helps to mitigate
the risk of malicious nodes coalition. The whole process can be verified
by any other nodes since the Hash is broadcasted and calculations can be
performed very quickly.