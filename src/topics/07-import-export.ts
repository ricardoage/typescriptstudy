import {Product,taxCalculation,TaxCalculationOptions} from './06-function-desestructuring';

const shoppingCart: Product []=[
    {
        description:'Nokia',
        price: 100
    },
    {
        description:'ipad',
        price:200
    }
];

const tco: TaxCalculationOptions = {
    products: shoppingCart,
    tax:0.15
}

const [total, tax] = taxCalculation(tco);