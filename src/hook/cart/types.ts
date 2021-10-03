import { ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string; 
  priceFormatted: string;
  amount: number;
}

export interface CartProviderProps {
  children: ReactNode;
}

export interface UpdateProductAmount {
  productId: number;
  amount: number;
}

export interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

export const keyStorage = '@StoreGames:cart'