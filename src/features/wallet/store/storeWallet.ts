import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type State = {
    isPrevActiveWallet:boolean
}

type Action = {
    onActiveWalletStatus: ()=>void,
    onDeactiveWalletStatus: ()=>void
}

export const useWalletStatus = create(
    persist<State & Action>(
        (set) => ({
            isPrevActiveWallet: false,
            onActiveWalletStatus: () => set({isPrevActiveWallet: true}),
            onDeactiveWalletStatus: () => set({isPrevActiveWallet: false})
        }),
        {
            name: 'wallet-store',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)