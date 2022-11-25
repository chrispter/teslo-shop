import { NextPage } from 'next';
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ShopLayout } from '../../components/layout/ShopLayout';
import NextLink from 'next/link';

const colums: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre completo', width: 300 },
    { 
        field: 'paid', 
        headerName: 'Pagada', 
        description: 'Muestra la información esta pagada', 
        width: 200, 
        renderCell: (params: GridValueGetterParams) => {
            return (
                params.row.paid
                    ? <Chip color='success' label='Pagada' variant='outlined' />
                    : <Chip color='error' label='No pagada' variant='outlined' />
            )
    }},
    { 
        field: 'orden', 
        headerName: 'Ver orden', 
        description: 'Muestra la información esta pagada', 
        width: 200, 
        sortable: false,
        renderCell: (params: GridValueGetterParams) => {
            return (
                <NextLink href={`/orders/${ params.row.id }`}>
                    <Link underline='always'>Ir orden</Link>
                </NextLink>
            )
    }}
];

const rows = [
    { id: 1, paid: true, fullname: 'Fernando Herrera' },
    { id: 2, paid: false, fullname: 'Laura Silva' },
    { id: 3, paid: true, fullname: 'Leyda Sanchez' },
    { id: 4, paid: false, fullname: 'Angel Pacheco' },
    { id: 5, paid: true, fullname: 'Patricia Osnaya' },
]
 
const HistoryPage: NextPage = () => {
    return (
        <ShopLayout title='Historial de ordenes' pageDescription='Historial de ordenes del cliente'>
            <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

            <Grid container sx={{ mt: 5 }}>
                <Grid item xs={ 12 } sx={{ height: 650, width: '100%' }}>
                    <DataGrid 
                        rows={ rows }
                        columns={ colums }
                        pageSize={ 10 }
                        rowsPerPageOptions={ [10] }
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage