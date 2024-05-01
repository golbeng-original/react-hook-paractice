import { useContext, useEffect, useState } from 'react'
import './App.css'

import { Box, Button, Stack, Typography } from '@mui/material'

import walletService from '@features/wallet/services/walletService'
import { MyContext } from '@features/wallet/services/walletContext'
import WalletAccountProfile from '@features/wallet/ui/WalletAccountProfile'
import WalletIndicator from '@features/wallet/ui/WalletIndicator'


function App() {
  const value = useContext(MyContext)

  const {isActive, onActiveWallet} = walletService.useActiveWallet()
  const account = walletService.useAccount()

  //console.log(`account = ${account}`)

  walletService.useEffectDetectWalletState()
  
  const handlerWalletTest = async () => {
    await onActiveWallet()
  }

  return (
    <>
      <WalletIndicator />
      <Stack>
        <Button variant='contained' onClick={handlerWalletTest}>
            Test Wallet
        </Button>
        <Typography>
              {`context value = ${value.something}`}
        </Typography>
        
        <WalletAccountProfile />
      </Stack>
    </>
  )
}

export default App
