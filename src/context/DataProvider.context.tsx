// DataContext.js
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  avatar: string;
  description: string;
  price: string;
  rating: number;
  category: string;
}

interface ProductContextProps {
  products: Product[];
  filter: (input: Partial<Product>) => void;
  refreshData: () => void;
  changePage: (pageNumber: number) => Promise<void>;
}

interface ProductsProviderProps {
  children: ReactNode;
}

const DataContext = createContext<ProductContextProps | null>(null);

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {

  const [productList, setProductList] = useState<Product[]>([])
  const [productFilteredList, setProductFilteredList] = useState<Product[]>([])


  const getData = async (pageNumber: number = 1, pageSize: number = 12) => {
    try {
      const response = await fetch(
        `http://localhost:3000/products?pageSize=${pageSize}&pageNumber=${pageNumber}`
      );
      const products: Product[] = await response.json();
      setProductList(products)
    } catch (error) {
      console.error("Error: DataProvider.context.tsx:41 ~ getData:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  

  const filter = ({ category, price, rating, name }: Partial<Product>) => {
    //funcão de filtro
  }

  return (
    <DataContext.Provider
      value={{ refreshData: () => getData(), changePage: getData, filter, products: productFilteredList }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ProductsProvider;

