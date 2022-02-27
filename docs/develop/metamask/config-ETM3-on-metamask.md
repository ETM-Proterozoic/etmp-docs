---
id: config-etm3-on-metamask
title: Add ETM3 Network
description: Build your next blockchain app on ETM3.
keywords:
  - docs
  - ETM3
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In order to view the flow of funds in your accounts, on the Polygon Network, you will need to configure ETM3 `{testnet, mainnet}` URL on Metamask.

There are two ways to do it:
1. [Using ETM3scan](/develop/metamask/config-etm3-on-metamask.md#Using-ETM3scan)
2. [Add the ETM3 network manually](/develop/metamask/config-etm3-on-metamask.md#add-the-etm3-network-manually)

### Using ETM3scan

:::note
Please make sure you have already installed <ins>**[Metamask](https://metamask.io/)**</ins>!
:::

<Tabs
  defaultValue="mainnet"
  values={[
    { label: 'ETM3-Mainnet', value: 'mainnet', },
  ]
}>

<TabItem value="mainnet">

Please follow the steps to add ETM3’s Mainnet:

- Navigate to [etm3.com](https://etm3.com/)

<img src={useBaseUrl("img/metamask/mainnet-button.png")} />
<p></p>

- Scroll down to the bottom of the page and click on the button `Add ETM3 Network`

<img src={useBaseUrl("img/metamask/mainnet-addnetwork.png")} />

- Once you click the button you will see a Metamask Notification, now click on **Approve**.
You will be directly switched to ETM3’s Mainnet now in the network dropdown list. You can now close the dialog.

</TabItem>

</Tabs>

If you are facing any issue, **Add the Network Manually(steps given below)**

### Add the ETM3 network manually

<Tabs
  defaultValue="mainnet"
  values={[
    { label: 'ETM3-Mainnet', value: 'mainnet', }
  ]
}>


<TabItem value="mainnet">
To add ETM3’s Mainnet, click on the Network selection dropdown and then click on Custom RPC.

<img src={useBaseUrl("img/metamask/select-network.png")} />

It will open up a form with 2 tabs on the top, Settings and Info. In the Settings tab you can add `ETM3 Mainnet` in the Network Name field, URL `https://polygon-rpc.com/` in the New RPC URL field, `137` in Chain ID field, `MATIC` in Currency Symbol field and `https://polygonscan.com/` in Block Explorer URL field.

<img src={useBaseUrl("img/metamask/metamask-settings-mainnet.png")} />

Once you’ve added the information click on Save. You will be directly switched to ETM3’s Mainnet now in the network dropdown list. You can now close the dialog.
</TabItem>
</Tabs>

**You have successfully added ETM3 Network to your Metamask!**
