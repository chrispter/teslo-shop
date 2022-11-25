import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { NextPage } from 'next';
import { CartList, OrdenSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layout/ShopLayout';

const SummaryPage: NextPage = () => {
    return (
        <ShopLayout title='Resumen de orden' pageDescription='Resumen de la orden'>
            <Typography variant='h1' component='h1'>Resumen de la orden</Typography>

            <Grid container>
                <Grid item xs={ 12 } sm={ 7 }>
                    <CartList />
                </Grid>

                <Grid item xs={ 12 } sm={ 5 }>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Resumen (3 productos)</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                                <NextLink href="/checkout/address">
                                    <Link underline='always'>Editar</Link>
                                </NextLink>
                            </Box>
                            
                            <Typography>Fernando Herrera</Typography>
                            <Typography>235 Algun lugar</Typography>
                            <Typography>Stitville, HYD 265</Typography>
                            <Typography>Canadá</Typography>
                            <Typography>+1 656 44 544</Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='end'>
                                <NextLink href="/cart">
                                    <Link underline='always'>Editar</Link>
                                </NextLink>
                            </Box>
                            <OrdenSummary />

                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>Confirmar orden</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage;