import { Box, Dialog, Typography } from "@mui/material"

import walletService from "../services/walletService"


const WalletIndicator = () => {

    const isActivating = walletService.useIsActivating()
    //console.log(isActivating)

    return (
        <Dialog open={isActivating}>
            <Typography>
                Connecting Wallet
            </Typography>
        </Dialog>
    )
}

export default WalletIndicator