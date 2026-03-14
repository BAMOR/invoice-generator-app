import { invoice } from "../data/invoice"

export const getInvoice = () => {
    // console.log(invoice)

    // let total = 0;
    // invoice.items.forEach( item => {
    //     total += item.price * item.quantity

    // });

    const total =  calculateTotal (invoice.items)
 return { ...invoice , total};   
}

export const calculateTotal = (items = []) => {
    return items
    .map(items =>   items.price * items.quantity )
    .reduce((accumulator, carrentValue) => accumulator + carrentValue, 0);
    
}


