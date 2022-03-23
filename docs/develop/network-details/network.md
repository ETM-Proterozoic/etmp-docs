---
id: network
title: Network
description: Build your next blockchain app on ETM3.
keywords:
  - docs
  - ETM3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="mainnet"
  values={[
    { label: 'ETM3-Mainnet', value: 'mainnet', },
    { label: 'ETM3-Testnet', value: 'testnet', },
  ]
}>
<TabItem value="testnet">

# ETM3-Testnet
Mumbai Testnet replicates the ETM3 Mainnet, which is to be used for testing. Testnet coins are separate and distinct from actual tokens/assets, and are never supposed to have any value. This allows application developers or validators/testers to experiment, without having to use real assets or worrying about breaking the main ETM3 chain.

The documentation corresponding contains details for the RPC - HTTP endpoints. There is also a full node setup if you wish to setup your own full node.

|              |                                        |
|--------------|----------------------------------------|
| NetworkName  | **Testnet**                                 
| chainId      | `37`                                  |
| Gas Token    | `ETM3 Token`|
| RPC          | `https://testnet-rpc.etm.network`
| Block Explorer |[`https:/test.etm3scan.com/`](https://test.etm3scan.com/)|



:::important
ETM3 network native token is **ETM3** which will be used as gas fee.
:::

</TabItem>
<TabItem value="mainnet">

# ETM3-Mainnet

🎉Finally!!! ETM3 Mainnet is open for developers🎉

The documentation corresponding contains details for the RPC - HTTP. There is also a full node setup if you wish to setup your own full node.


|              |                                        |
|--------------|----------------------------------------|
| NetworkName  | **ETM3 Mainnet**                                                              |
| chainId      | `36`                                  |
| Gas Token    | `ETM3 Token` |
| RPC    | [`https://rpc.etm.network`](https://rpc.etm.network) |
| Block Explorer | [`https://etm3scan.com/`](https://www.etm3scan.com/)|



:::important
ETM3 network native token is **ETM3** which will be used as gas fee.
:::

</TabItem>
</Tabs>
