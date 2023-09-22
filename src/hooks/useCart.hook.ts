import { useContext } from "react";
import { CartContext } from "../context/CartProvider.context";

export const useCart = () =>  useContext(CartContext)