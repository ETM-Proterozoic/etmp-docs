import { message } from 'react-message-popup'
export function changeNetWork () {
  if (!window.ethereum){
    return message.error('no metamask wallet', 1500)
  }
  window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: '0x24',
        chainName: 'ETM3 Mainnet',
        nativeCurrency: {
          name: 'ETM3',
          symbol: 'ETM3',
          decimals: 18,
        },
        rpcUrls: ['https://rpc.etm3.com/'],
        blockExplorerUrls: ['https://etm3scan.com'],
      }
    ],
  }).then(() => {
    message.success('success', 1000)
  }).catch(() => {
  })
}
