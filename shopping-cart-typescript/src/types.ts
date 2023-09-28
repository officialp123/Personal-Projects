// types.ts

export interface Item {
  id: number;
  name: string;
  price: number;
  img: string;
   quantity: number; 
}

export interface Data {
  items: Item[];
  cartItems: Item[];
}

export interface RootState {
  items: Item[];
  cartItems: Item[];
}