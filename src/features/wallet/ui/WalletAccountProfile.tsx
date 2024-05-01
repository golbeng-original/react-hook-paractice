import { Stack, Typography } from "@mui/material"

import walletService  from '@features/wallet/services/walletService'

const WalletAccountProfile = () => {

    const account = walletService.useAccount()

    return (
        <Stack
            direction={'row'}
            sx={{
                border: '1px solid',
                borderColor : '#000',
                p: 2,
                backgroundColor: '#FFF',
            }}
        >
            <Typography color={'#000'}>
                {account}
            </Typography>
        </Stack>
    )
}

export default WalletAccountProfile