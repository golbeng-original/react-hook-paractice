import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MyContextProvider } from '@features/wallet/services/walletContext.tsx'


/*
const provider = await detactEthereumProvider()

if( provider ) {
  console.log('installed metaMask')

  if(provider !== window.ethereum) {
    console.error('DO you have multiple wallets installed?')
  }

} else {
  console.log('plz install metaMask!')
}
*/

/*
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MetaMaskProvider
      debug={true}
      sdkOptions={{
        checkInstallationImmediately: false,
        dappMetadata: {
          name: 'Example React Dapp',
          url: window.location.href
        }
      }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>,
)
*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>,
)
