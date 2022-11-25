import { Box, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { NextPage } from 'next';
import { CartList, OrdenSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layout/ShopLayout';
import { CreditCardOff, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage: NextPage = () => {
    return (
        <ShopLayout title='Resumen de la orden 1512' pageDescription='Resumen de la orden'>
            <Typography variant='h1' component='h1'>Orden: 1521</Typography>

            {/* <Chip 
                sx={{ my: 2 }}
                label="Pediente de pago"
                variant='outlined'
                color='error'
                icon={ <CreditCardOff />}
            /> */}
            <Chip 
                sx={{ my: 2 }}
                label="Orden ya fue pagada"
                variant='outlined'
                color='success'
                icon={ <CreditScoreOutlined />}
            />

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
                                {/* TODO */}
                                <h1>Pagar</h1>
                                <Chip 
                                    sx={{ my: 2 }}
                                    label="Orden ya fue pagada"
                                    variant='outlined'
                                    color='success'
                                    icon={ <CreditScoreOutlined />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default OrderPage;