import { ReactNode, createContext, useEffect, useState } from "react";
import { findProductById } from "../utils/search";
import { Product } from "./ProductsProvider.context";
import CartDataSource from "../services/storage/datasource/cart.datasource";


export interface CartItem {
  product: Product
  quantity: number;
}

interface CartProvider {
  getTotalOfProducts: ()=> number;
  cart: CartItem[];
  addToCart: (cartItem: CartItem)=>  void
  removeProductFromCartById: (id: Product['id']) => void
}

interface ProductsProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartProvider>({} as CartProvider);

export const CartProvider: React.FC<ProductsProviderProps> = ({children}) => {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const cartData = CartDataSource.getCartData
    if(cartData){
      setCart(cartData)
    }
  },[])

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
    updateCart(updatedCart);
  }

  const updateCart = (item: CartItem[]) => {
    setCart(item);
    CartDataSource.setCartData = item;
  }

  const removeProductFromCartById = (productId: Product['id']) => { 
    const productFound = findProductById(productId, cart)
    if(productFound) {
      const updatedCart = cart.filter(item => item.product.id !== productId);
      updateCart(updatedCart);
    }
  }

  const getTotalOfProducts = () => cart.reduce((acc, cur) =>  acc + cur.quantity , 0)

  return (
    <CartContext.Provider value={{
        getTotalOfProducts,
        addToCart,
        cart, 
        removeProductFromCartById
      }}>
      {children}
    </CartContext.Provider>
  )
} 



