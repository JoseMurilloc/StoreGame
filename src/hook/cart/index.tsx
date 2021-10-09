import { createContext, useContext, useState } from 'react';
import { 
  Product, CartContextData, 
  CartProviderProps, UpdateProductAmount, 
} from './types';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>([]);
  
  const addProduct = async (productId: number) => {
    try {
      const {data} = await api(`/products/${productId}`)


      const existingProduct = cart.find(product => product.id === data.id)

      if (!existingProduct) {
        const newProductToCart = {
          ...data, 
          image: `http://localhost:3000/static/${data.image}`, 
          amount: 1,
          priceFormatted: formatPrice(data.price)
        }
        setCart([...cart, newProductToCart])

        toast.success(`🎉 ${data.name} Adicionado com sucesso`)

      } else {
        const productAddAmount = cart.map(product => {
          if (product.id === existingProduct.id) {
            return ({...product, amount: product.amount+=1})
          }
          return product
        })
        setCart(productAddAmount)
        toast.success(`🤩 ${data.name} Adicionado novamente`)
      }

    } catch(err) {
      toast.error('Erro na adição do produto');    
    }
  };


  const removeProduct = (productId: number) => {
    try {
      
      const product = cart.find(product => product.id === productId);
      
      if(!product) {
        toast.error('Erro na remoção do produto');
      } else {
        const newCart = cart.filter(product => product.id !== productId)
        setCart(newCart);
      }
    
    } catch {
      toast.error('Erro na remoção do produto');    
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      
      if(amount < 1) {
        return;
      }

      const verifyExistProduct = cart.find(product => product.id === productId)

      if(!verifyExistProduct) {
        toast.error('Erro na alteração de quantidade do produto')
        return;
      }

      const updatedCart = cart.map(product => {
        if (product.id === productId) {
          return ({ ...product, amount})
        }
        return product
      })

      setCart(updatedCart)
    } catch {
      toast.error("Limite do estoque atingido!");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
