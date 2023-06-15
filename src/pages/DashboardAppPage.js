import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {


  AppOrderTimeline,
 
  AppWidgetSummary,


} from '../sections/@dashboard/app';



// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Category" total={30} icon={'dashicons:category'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Products" total={1000} color="info" icon={'fa6-solid:file-invoice-dollar'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Invoice" total={17} color="warning" icon={'streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Return" total={234} color="error" icon={'tabler:truck-return'} />
          </Grid>

         
          {/* <Grid item xs={12} md={6} lg={8}>
         
          </Grid> */}

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title=" Recent Reports"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '2023, Snacks orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

        
        </Grid>
      </Container>
    </>
  );
}
