import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { ShopLayout } from '../../components/layout';
import { ProductList } from '../../components/products';
import { FullScreemLoading } from '../../components/ui';
import { useProducts } from '../../hooks';




const MenPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=men');  

  return (
    <ShopLayout title='Hombres - Teslo Shop'  pageDescription='Encuentra los mejores productos para hombres'>
      <Typography variant='h1' component='h1'>Hombres</Typography>
      <Typography variant='h2' component='h2' sx={{ mb: 1}}>Productos para ellos</Typography>
      { 
        isLoading 
          ? <FullScreemLoading />
          : <ProductList products={ products } />
      }
      

    </ShopLayout>
  )
}

export default MenPage;
