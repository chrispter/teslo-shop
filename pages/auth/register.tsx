import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { AuthLayout } from '../../components/layout';

const RegisterPage: NextPage = () => {
    return (
        <AuthLayout title='Crear cuenta'>
            <Box sx={{ width: 350, padding: '10px 20px'}}>
                <Grid container spacing={ 2 }>
                    <Grid item xs={ 12 }>
                        <Typography variant='h1' component='h1'>Crear cuenta</Typography>
                    </Grid>
    
                    <Grid item xs={ 12 }>
                        <TextField  label="Nombre completo" variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={ 12 }>
                        <TextField  label="Correo" variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={ 12 }>
                        <TextField  label="Contraseña" type='password' variant='filled' fullWidth />
                    </Grid>
                    <Grid item xs={ 12 }>
                        <Button color='secondary' className='circular-btn' size='large' fullWidth>Ingresar</Button>
                    </Grid>

                    <Grid item xs={ 12 } display='flex' justifyContent='end'>
                        <NextLink href='/auth/login' >
                            <Link underline='always'>¿Ya tienes cuenta?</Link>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default RegisterPage;