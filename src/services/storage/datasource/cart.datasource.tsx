import { CartItem } from "../../../context/CartProvider.context";
import { getStorage } from "../storage.provider";

class CartDataSource {
  private sessionStorage = getStorage();
  private cartKey = 'cartKey'

  get getCartData(): CartItem[] {
    const cartString = this.sessionStorage.get(this.cartKey);
    return cartString ? (JSON.parse(cartString) as CartItem[]) : [];
  }

  set setCartData(value: CartItem[]) {
    this.sessionStorage.put(this.cartKey, JSON.stringify(value));
  }
}

export default new CartDataSource()