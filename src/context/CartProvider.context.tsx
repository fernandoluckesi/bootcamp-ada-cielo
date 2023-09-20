import { ReactNode, createContext, useState } from "react";
import { Product } from "./DataProvider.context"
import { findProductById } from "../utils/search";

export interface CartItem {
  product: Product
  quantity: number;
}

interface CartProvider {
  getTotalOfProducts: ()=> number;
  cart: CartItem[];
  addToCart: (cartItem: CartItem)=>  void
  removeFromCart: (id: Product['id']) => void
}

interface ProductsProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartProvider>({} as CartProvider);

export const CartProvider: React.FC<ProductsProviderProps> = ({children}) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (cartItem: CartItem) => {
    const productFound = findProductById(cartItem.product.id, cart)
    if (productFound) {
      increaseQuantityById(productFound.product.id, cartItem.quantity)
    } else {
      setCart([
        ...cart,
        cartItem
      ]);
    } 
  }

  const increaseQuantityById = (productId: string, quantity: number): void  =>{
    const updatedCart = cart.map(item => {
      if (item.product.id === productId) {
        return { ...item, quantity: item.quantity + quantity };
      }
      return item;
    });
    setCart(updatedCart);
  }

  const removeFromCart = (productId: Product['id']) => { 
    const productFound = findProductById(productId, cart)
    if(productFound) {
      const updatedCart = cart.filter(item => item.product.id !== productId);
      setCart(updatedCart);
    }
  }

  const getTotalOfProducts = () => cart.reduce((acc, cur) =>  acc + cur.quantity , 0)

  return (
    <CartContext.Provider value={{
        getTotalOfProducts,
        addToCart,
        cart, 
        removeFromCart
      }}>
      {children}
    </CartContext.Provider>
  )
} 