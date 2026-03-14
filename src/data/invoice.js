export const invoice = {
    id: 10,
    name: 'componentes PC',
    client: {
        name: 'Juan Perez',
        lastName: 'Gomez',
        address:{
            country: 'Argentina',
            city: 'Buenos Aires',
            street: 'Calle Falsa 123',
            number: 32
        }
    },
    company: {
        name: 'New egg',
        fiscalNumber: '30-12345678-9',
    },
    items: [
        {
            id: 1,
            product: 'Cpu Interl i7',
            price: 499,
            quantity: 1,
            
        },
        {
            id: 2,
            product: 'Corsair Keyboard Mecanico',
             price: 150,
            quantity: 2,
           
        },
        {

            id: 3,
            product: 'Monitor Asus',
            price: 350,
            quantity: 1,
            
        }
    ]

}