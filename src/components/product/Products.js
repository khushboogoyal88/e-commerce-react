import React from 'react'
import { Grid } from '@material-ui/core';
import Product from './product/Product'
import useStyles from './styles';


const products = [
    {id: 1, name:"Shoes", description: "Running Shoes"},
    {id: 2, name: "Macbook", description: "Apple macbook"}
]

export const Products = () => {
        const classes = useStyles();
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify='center' spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </main>
    );
}

export default Products;