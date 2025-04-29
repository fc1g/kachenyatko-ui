'use server';

// TODO: replace with actual data from database
export default async function getBestsellers() {
  await new Promise(resolve => setTimeout(resolve, 3000));

  return [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1745750747228-d7ae37cba3a5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Product 1',
      name: 'Product 1',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum in aut illum, aperiam',
      price: 100,
      discount: 10,
      totalPrice: 90,
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1745750747228-d7ae37cba3a5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Product 2',
      name: 'Product 2',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum in aut illum, aperiam',
      price: 200,
      discount: 20,
      totalPrice: 180,
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1745750747228-d7ae37cba3a5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Product 3',
      name: 'Product 3',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum in aut illum, aperiam',
      price: 300,
      discount: 0,
      totalPrice: 300,
    },
  ];
}
