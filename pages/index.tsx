import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { ShopLayout } from '../components/layout';
import { ProductList } from '../components/products';
import { FullScreemLoading } from '../components/ui';
import { useProducts } from '../hooks';




const HomePage: NextPage = () => {

  const { products, isLoading } = useProducts('/products');  

  return (
    <ShopLayout title='Teslo Shop - Home'  pageDescription='Encuentra los mejores productos'>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' component='h2' sx={{ mb: 1}}>Todos los productos</Typography>
      { 
        isLoading 
          ? <FullScreemLoading />
          : <ProductList products={ products } />
      }
      

    </ShopLayout>
  )
}

export default HomePage;
