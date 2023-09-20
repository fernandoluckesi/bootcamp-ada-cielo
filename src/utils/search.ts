import { CartItem } from "../context/CartProvider.context";
import { Product } from "../context/ProductsProvider.context";

export const findProductById = (id:  Product['id'], cart: CartItem[]) => cart.find(item => item.product.id === id)
  
export const capitalizeFirstLetter = (string: string) =>string.charAt(0).toUpperCase() + string.slice(1);

