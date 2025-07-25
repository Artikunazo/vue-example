// Defines the structure of a product object
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Extends the Product interface to include quantity for the cart
export interface CartItem extends Product {
  quantity: number;
}