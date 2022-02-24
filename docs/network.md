---
id: network
title: Network
description: Build your next blockchain app on Polygon.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
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

The documentation corresponding contains details for the RPC - HTTP, WS and Dagger endpoints. There is also a full node setup if you wish to setup your own full node.

|              |                                        |
|--------------|----------------------------------------|
| NetworkName  | **Testnet**                                 
| chainId      | `37`                                  |
| Gas Token    | `ETM3 Token`|
| Gas Station    | [`https://gasstation-mumbai.matic.today/v2`](https://gasstation-mumbai.matic.today/v2) ([For more...](/docs/develop/tools/matic-gas-station)) |
| RPC          | `https://testnet-rpc.etm3.com`<br/>Public RPCs may have traffic or rate-limits depending on usage. You can sign up for a dedicated free RPC URL at the following: <br/> <ul><li>[Alchemy](https://www.alchemy.com/)</li><li>[Ankr](https://www.ankr.com/)</li><li>[BlockPI](https://chains.blockpi.io/#/etm3)</li><li> [Chainstack](https://chainstack.com/build-better-with-etm3/)</li><li> [DataHub (Figment)](https://datahub.figment.io)</li><li> [Getblock](https://getblock.io/en/) </li><li>[Infura](https://infura.io)</li><li>[MaticVigil](https://rpc.maticvigil.com/)</li><li>[Moralis](https://moralis.io)</li><li>[Pocket Network](https://www.portal.pokt.network/)</li><li> [QuickNode](https://www.quicknode.com/chains/matic) </li></ul>    |
| Websocket    | `wss://rpc-mumbai.matic.today` or <br/>`wss://ws-matic-mumbai.chainstacklabs.com` or <br/> `wss://rpc-mumbai.maticvigil.com/ws` or <br/> `wss://matic-testnet-archive-ws.bwarelabs.com`  <br/><br/>Public RPCs may have traffic or rate-limits depending on usage. You can sign up for a dedicated free RPC URL at the following: <br/> <ul><li>[Alchemy](https://www.alchemy.com/)</li><li>[Ankr](https://www.ankr.com/)</li><li> [Chainstack](https://chainstack.com/build-better-with-polygon/)</li><li> [DataHub (Figment)](https://datahub.figment.io)</li><li> [Getblock](https://getblock.io/en/) </li><li>[Infura](https://infura.io)</li><li>[MaticVigil](https://rpc.maticvigil.com/)</li><li>[Moralis](https://moralis.io)</li><li> [QuickNode](https://www.quicknode.com/chains/matic) </li></ul>     |
| Heimdall API | `https://heimdall.api.matic.today` |
| Block Explorer |[`https://mumbai.polygonscan.com/`](https://mumbai.polygonscan.com/)|


> For more details: [https://static.matic.network/network/testnet/mumbai/index.json](https://static.matic.network/network/testnet/mumbai/index.json)

:::important
Polygon network native token is **MATIC** which will be used as gas fee.
:::

</TabItem>
<TabItem value="mainnet">

# ETM3-Mainnet

🎉Finally!!! Polygon Mainnet is open for developers🎉

The documentation corresponding contains details for the RPC - HTTP, WS and Dagger endpoints. There is also a full node setup if you wish to setup your own full node.


|              |                                        |
|--------------|----------------------------------------|
| NetworkName  | **Polygon Mainnet**                                                              |
| chainId      | `36`                                  |
| Gas Token    | `ETM3 Token` |
| Gas Station    | [`https://rpc.etm3.com`](https://rpc.etm3.com) |<br/><br/>Public RPCs may have traffic or rate-limits depending on usage. You can sign up for a dedicated free RPC URL at the following: <br/> <ul><li>[Alchemy](https://www.alchemy.com/)</li><li>[Ankr](https://www.ankr.com/)</li><li>[BlockPI](https://chains.blockpi.io/#/polygon)</li><li> [Chainstack](https://chainstack.com/build-better-with-polygon/)</li><li> [DataHub (Figment)](https://datahub.figment.io)</li><li> [Getblock](https://getblock.io/en/) </li><li>[Infura](https://infura.io)</li><li>[MaticVigil](https://rpc.maticvigil.com/)</li><li>[Moralis](https://moralis.io)</li><li>[Pocket Network](https://www.portal.pokt.network/)</li><li> [QuickNode](https://www.quicknode.com/chains/matic) </li></ul>  |
| Websocket    | `wss://rpc.etm3.com`  <br/>Public RPCs may have traffic or rate-limits depending on usage. You can sign up for a dedicated free RPC URL at the following: <br/> <ul><li>[Alchemy](https://www.alchemy.com/)</li><li>[Ankr](https://www.ankr.com/)</li><li> [Chainstack](https://chainstack.com/build-better-with-polygon/)</li><li> [DataHub (Figment)](https://datahub.figment.io)</li><li> [Getblock](https://getblock.io/en/) </li><li>[Infura](https://infura.io)</li><li>[MaticVigil](https://rpc.maticvigil.com/)</li><li>[Moralis](https://moralis.io)</li><li> [QuickNode](https://www.quicknode.com/chains/matic) </li></ul>     |
| Heimdall API | `https://heimdall.api.matic.network` |
| Block Explorer | [`https://polygonscan.com/`](https://www.polygonscan.com/)|


For more details: [https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json](https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json)

:::important
Polygon network native token is **MATIC** which will be used as gas fee.
:::

</TabItem>
</Tabs>
