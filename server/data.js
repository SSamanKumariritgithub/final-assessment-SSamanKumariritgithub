import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Shammi',
      email: 'shammi@gmail.com',
      password: bcrypt.hashSync('shammi@123'),
      isAdmin: true,
    },
    {
      name: 'Kavinda',
      email: 'kavinda@gmail.com',
      password: bcrypt.hashSync('kavinda@123'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Saree 1',
      slug: 'Saree 1',
      category: 'Saree',
      image: '/images/s1.jpg', 
      price: 650,
      countInStock: 2,
      brand: 'Arya',
      rating: 5,
      numReviews: 10,
      description: '6 Yard + Embroidered Chiffon + Silk Jacket piece + Velvet || The colors may look slightly different due to lighting conditions or the display you view it from',
    },
    {
      name: 'Saree 2',
      slug: 'Saree 2',
      category: 'Saree',
      image: '/images/s2.jpg', 
      price: 650,
      countInStock: 5,
      brand: 'Arya',
      rating: 4.5,
      numReviews: 20,
      description: '6 Yard + Embroidered Chiffon + Silk Jacket piece + Velvet || The colors may look slightly different due to lighting conditions or the display you view it from',
    },
    {
      name: 'Saree 3',
      slug: 'Saree 3',
      category: 'Saree',
      image: '/images/s3.jpg', 
      price: 900,
      countInStock: 0,
      brand: 'Arya',
      rating: 3.5,
      numReviews: 5,
      description: '6 Yard + Embroidered Chiffon + Silk Jacket piece + Velvet || The colors may look slightly different due to lighting conditions or the display you view it from',
    },
    {
      name: 'Saree 4',
      slug: 'Saree 4',
      category: 'Saree',
      image: '/images/s4.jpg', 
      price: 1100,
      countInStock: 5,
      brand: 'Arya',
      rating: 4,
      numReviews: 41,
      description: '6 Yard + Embroidered Chiffon + Silk Jacket piece + Velvet || The colors may look slightly different due to lighting conditions or the display you view it from',
    },
    {
      name: 'Saree 5',
      slug: 'Saree 5',
      category: 'Saree',
      image: '/images/s5.jpg', 
      price: 1300,
      countInStock: 12,
      brand: 'Arya',
      rating: 5,
      numReviews: 22,
      description: '6 Yard + Embroidered Chiffon + Silk Jacket piece + Velvet || The colors may look slightly different due to lighting conditions or the display you view it from',
    },
    {
      name: 'Saree 6',
      slug: 'Saree 6',
      category: 'Saree',
      image: '/images/s6.jpg', 
      price: 1200,
      countInStock: 12,
      brand: 'Arya',
      rating: 3.6,
      numReviews: 18,
      description: '6 Yard + Embroidered Chiffon + Silk Jacket piece + Velvet || The colors may look slightly different due to lighting conditions or the display you view it from',
    },
    {
      name: 'Saree 7',
      slug: 'Saree 7',
      category: 'Saree',
      image: '/images/s7.jpg', 
      price: 650,
      countInStock: 20,
      brand: 'Arya',
      rating: 1.5,
      numReviews: 52,
      description: '6 Yard + Embroidered Chiffon + Silk Jacket piece + Velvet || The colors may look slightly different due to lighting conditions or the display you view it from',
    },
    {
      name: 'Saree 8',
      slug: 'Saree 8',
      category: 'Saree',
      image: '/images/s8.jpg', 
      price: 1550,
      countInStock: 20,
      brand: 'Arya',
      rating: 5,
      numReviews: 52,
      description: '6 Yard + Embroidered Chiffon + Silk Jacket piece + Velvet || The colors may look slightly different due to lighting conditions or the display you view it from',
    },
    {
      name: 'Saree 9',
      slug: 'Saree 9',
      category: 'Saree',
      image: '/images/s9.jpg', 
      price: 1300,
      countInStock: 5,
      brand: 'Arya',
      rating: 3.8,
      numReviews: 32,
      description: '6 Yard + Embroidered Chiffon + Silk Jacket piece + Velvet || The colors may look slightly different due to lighting conditions or the display you view it from',
    },
    {
      name: 'Saree 10',
      slug: 'Saree 10',
      category: 'Saree',
      image: '/images/s10.jpg', 
      price: 1550,
      countInStock: 10,
      brand: 'Arya',
      rating: 5,
      numReviews: 33,
      description: '6 Yard + Embroidered Chiffon + Silk Jacket piece + Velvet || The colors may look slightly different due to lighting conditions or the display you view it from',
    },
    {
      name: 'Saree 11',
      slug: 'Saree 11',
      category: 'Saree',
      image: '/images/s11.jpg', 
      price: 1450,
      countInStock: 2,
      brand: 'Arya',
      rating: 2.5,
      numReviews: 12,
      description: '6 Yard + Embroidered Chiffon + Silk Jacket piece + Velvet || The colors may look slightly different due to lighting conditions or the display you view it from',
    },
    {
      name: 'Saree 12',
      slug: 'Saree 12',
      category: 'Saree',
      image: '/images/s12.jpg', 
      price: 1550,
      countInStock: 20,
      brand: 'Arya',
      rating: 4.5,
      numReviews: 23,
      description: '6 Yard + Embroidered Chiffon + Silk Jacket piece + Velvet || The colors may look slightly different due to lighting conditions or the display you view it from',
    },
    
    {
      name: 'frock 1',
      slug: 'frock 1',
      category: 'SFrocks',
      image: '/images/f1.jpg', 
      price: 1200,
      countInStock: 10,
      brand: 'Nike',
      rating: 4,
      numReviews: 12,
      description: 'high quality frock - long',
    },
    {
      name: 'frock 2',
      slug: 'frock 2',
      category: 'Frocks',
      image: '/images/f2.jpg',
      price: 890,
      countInStock: 10,
      brand: 'Nike',
      rating: 2,
      numReviews: 25,
      description: 'high quality frock - long',
    },
    {
      name: 'frock 3',
      slug: 'frock 3',
      category: 'Frocks',
      image: '/images/f3.jpg',
      price: 480,
      countInStock: 0,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 5,
      description: 'high quality frock - long',
    },
    {
      name: 'frock 4',
      slug: 'frock 4',
      category: 'Frocks',
      image: '/images/f4.jpg', 
      price: 550,
      countInStock: 2,
      brand: 'Nike',
      rating: 3,
      numReviews: 20,
      description: 'high quality frock -long',
    },
  ],
};
export default data;
