import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';
import { ShopLayout } from '../components/layout';

const Custom404: NextPage = () => {
  return (
    <ShopLayout title='Pagina no encontrada' pageDescription='No hay nada que mostrar'>
        <Box 
            display='flex' 
            justifyContent='center' 
            alignItems='center' 
            height='calc(100vh - 200px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
            <Typography variant='h1' component='h1' fontSize={ 80 } fontWeight={ 150 }>404 | </Typography>
            <Typography marginLeft={ 2 }>No encontramos ninguna página aquí</Typography>
        </Box>
    </ShopLayout>
  )
}

export default Custom404;