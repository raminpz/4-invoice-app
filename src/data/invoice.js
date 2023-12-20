export const invoice = {
    id: 10,
    name: 'Componente PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 12
        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 12345
    },
    items: [
        {
            id: 1,
            product:'CPU Core I7',
            price: 499,
            quantity: 1,
        },
        {
            id: 2,
            product:'Corsair Keyboard Mecanico',
            price: 150,
            quantity: 2,
        },
        {
            id: 3,
            product:'Monitor Asus',
            price: 360,
            quantity: 1,
        }
    ]

}