export interface Product{
    description:string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250.9
}

export interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

export function taxCalculation(options:TaxCalculationOptions): [number,number]{
    let total = 0;
    options.products.forEach( ({price}) =>{
        total += price;
    }    
    ) 

    return [total, total * options.tax]
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total,taxTotal] = taxCalculation({
    products: shoppingCart,
    tax:tax,
})

console.log('Total', total)
console.log('Tax', taxTotal)


// export {};