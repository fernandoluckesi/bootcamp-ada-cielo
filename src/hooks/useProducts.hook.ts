import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider.context";

export const useProducts = () =>  useContext(ProductsContext)