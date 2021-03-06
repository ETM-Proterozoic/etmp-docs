---
id: full-node-binaries
title: Full Node Binaries
description: Build your next blockchain app on ETM/P.
keywords:
  - docs
  - ETM/P
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<Tabs
  defaultValue="mainnet"
  values={[
    { label: 'ETM/P-Mainnet', value: 'mainnet', },
    { label: 'ETM/P-Testnet', value: 'testnet', },
  ]
}>

<TabItem value="testnet">

This section guides you through starting and running a full node on a binary.

:::note

Steps in this guide involve waiting for the Heimdall and Bor services to fully sync. This process takes several days to complete.

:::


## Prerequisites


- One machine is needed.
- Go 1.17 installed on both the Full Node machine.


## Overview

- Have the one machine prepared.
- Configure the Full node.
- Start the Full node.

:::note
You have to follow the exact outlined sequence of actions, otherwise you will run into issues.
:::

### **Install GO**

```bash
wget https://gist.githubusercontent.com/ssandeep/a6c7197811c83c71e5fead841bab396c/raw/go-install.sh
bash go-install.sh
sudo ln -nfs ~/.go/bin/go /usr/bin/go
```

> Note: Go version 1.17 is recommended

## Setup node files

### Fetch launch repo

```bash
cd ~/
git clone https://github.com/ETM-Proterozoic/etmp-chain.git
```

### Install etmp-chain

```bash
cd etmp-chain/
go build -o etmp-chain main.go
sudo mv etmp-chain /usr/local/bin
```

## Start services

Run the full Heimdall node with the following commands:

```bash
wget https://raw.githubusercontent.com/ETMP/etmp-chain/develop/genesis-testnet.json -O genesis.json
etmp-chain server --data-dir ./node --chain genesis.json --jsonrpc 0.0.0.0:8545
```


</TabItem>

<TabItem value="mainnet">

# ETM/P Full Node Setup Using Binaries

This section guides you through starting and running a full node on a binary.

:::note

Steps in this guide involve waiting for the Heimdall and Bor services to fully sync. This process takes several days to complete.

:::


## Prerequisites

- One machine is required.
- Go 1.17 installed on both the Full Node machine.

## Overview

- Have the one machine prepared.
- Configure the Full node.
- Start the Full node.

:::note
You have to follow the exact outlined sequence of actions, otherwise you will run into issues.
:::

### **Install GO**

```bash
wget https://gist.githubusercontent.com/ssandeep/a6c7197811c83c71e5fead841bab396c/raw/go-install.sh
bash go-install.sh
sudo ln -nfs ~/.go/bin/go /usr/bin/go
```

> Note: Go version 1.17 is recommended

## Setup node files

### Fetch launch repo

```bash
cd ~/
git clone https://github.com/ETM-Proterozoic/etmp-chain.git
```

### Install etmp-chain

```bash
cd etmp-chain/
go build -o etmp-chain main.go
sudo mv etmp-chain /usr/local/bin
```

## Start services

Run the full Heimdall node with the following commands:

```bash
wget https://raw.githubusercontent.com/ETMP/etmp-chain/develop/genesis.json -O genesis.json
etmp-chain server --data-dir ./node --chain genesis.json --jsonrpc 0.0.0.0:8545
```

</TabItem>

</Tabs>
