import { createContext, useEffect, useState } from 'react'

import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { useWalletStatus } from '../store/storeWallet'

// wallet 관련한 서비스를 추상화 한다.

const [metamask, hooks] = initializeConnector<MetaMask>((actions) => new MetaMask({actions}))

const {
    useIsActive,
    useIsActivating,
    useChainId,
    useAccount
} = hooks

// wallet이 설치 되어있는지 확인한다.
const isInstallWallet = () => {
    return typeof window.ethereum !== 'undefined' ? true : false
}

const useActiveWallet = () => {

    const isActive = useIsActive()
    const isActiving = useIsActivating()
    const {isPrevActiveWallet, onActiveWalletStatus } = useWalletStatus()

    const onActiveWallet = async () => {
        if( isActive === true || isActiving === true ) {
            return
        }

        await metamask.activate()
        onActiveWalletStatus()
    }

    if( isPrevActiveWallet === true && isActive === false) {
        onActiveWallet()
    }

    return {isActive, onActiveWallet}
}

const useEffectDetectWalletState = () => {

    const { onDeactiveWalletStatus } = useWalletStatus()

    useEffect(() => {
        console.log('useEffectDetectWalletState')

        function onAccountChange(accounts:string[]) {
            console.log('onAccountChange')
            
            if( accounts.length === 0 ) {
                console.log('onDeactivate')
                onDeactiveWalletStatus()
            }
        }

        metamask.provider?.on('accountsChanged', onAccountChange)

        return () => {
            metamask.provider?.removeListener('accountsChanged', onAccountChange)
        }
    }, [metamask.provider])
}

export default {
    isInstallWallet,

    useEffectDetectWalletState,
    useActiveWallet,
    useAccount,
    useIsActivating
}
