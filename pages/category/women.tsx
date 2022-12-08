import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { ShopLayout } from '../../components/layout';
import { ProductList } from '../../components/products';
import { FullScreemLoading } from '../../components/ui';
import { useProducts } from '../../hooks';




const WomenPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=women');  

  return (
    <ShopLayout title='Mujeres - Teslo Shop'  pageDescription='Encuentra los mejores productos para mujeres'>
      <Typography variant='h1' component='h1'>Mujeres</Typography>
      <Typography variant='h2' component='h2' sx={{ mb: 1}}>Productos para ellas</Typography>
      { 
        isLoading 
          ? <FullScreemLoading />
          : <ProductList products={ products } />
      }
      

    </ShopLayout>
  )
}

export default WomenPage;
