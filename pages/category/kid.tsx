import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { ShopLayout } from '../../components/layout';
import { ProductList } from '../../components/products';
import { FullScreemLoading } from '../../components/ui';
import { useProducts } from '../../hooks';




const KidPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=kid');  

  return (
    <ShopLayout title='Niños - Teslo Shop'  pageDescription='Encuentra los mejores productos para niños'>
      <Typography variant='h1' component='h1'>Niños</Typography>
      <Typography variant='h2' component='h2' sx={{ mb: 1}}>Productos para niños</Typography>
      { 
        isLoading 
          ? <FullScreemLoading />
          : <ProductList products={ products } />
      }
      

    </ShopLayout>
  )
}

export default KidPage;
