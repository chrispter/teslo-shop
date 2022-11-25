import { Grid, Typography } from '@mui/material'
import { FC } from 'react'

export const OrdenSummary:FC = () => {
    return (
        <Grid container>

            <Grid item xs={ 6 }>
                <Typography>No. productos</Typography>
            </Grid>
            <Grid item xs={ 6 } display='flex' justifyContent='end'>
                <Typography>3</Typography>
            </Grid>

            <Grid item xs={ 6 }>
                <Typography>SubTotal</Typography>
            </Grid>
            <Grid item xs={ 6 } display='flex' justifyContent='end'>
                <Typography>$350.00</Typography>
            </Grid>

            <Grid item xs={ 6 }>
                <Typography>Impuestos (16%)</Typography>
            </Grid>
            <Grid item xs={ 6 } display='flex' justifyContent='end'>
                <Typography>$45.00</Typography>
            </Grid>

            <Grid item xs={ 6 } sx={{ mt: 2 }}>
                <Typography variant='subtitle1'>Total:</Typography>
            </Grid>
            <Grid item xs={ 6 } display='flex' justifyContent='end' sx={{ mt: 2 }}>
                <Typography variant='subtitle1'>$395.00</Typography>
            </Grid>

            
        </Grid>
    )
}
