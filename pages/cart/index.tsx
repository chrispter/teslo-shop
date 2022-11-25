import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { NextPage } from 'next';
import { CartList, OrdenSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layout/ShopLayout';

const CartPage: NextPage = () => {
    return (
        <ShopLayout title='Carrito - 3' pageDescription='Carrito de compras de la tienda'>
            <Typography variant='h1' component='h1'>Carrito</Typography>

            <Grid container>
                <Grid item xs={ 12 } sm={ 7 }>
                    <CartList editable />
                </Grid>

                <Grid item xs={ 12 } sm={ 5 }>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Order</Typography>
                            <Divider sx={{ my: 1 }} />

                            <OrdenSummary />

                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>Checkout</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default CartPage;