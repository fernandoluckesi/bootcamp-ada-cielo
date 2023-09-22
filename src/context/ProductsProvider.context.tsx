// DataContext.js
import React, { createContext, ReactNode, useEffect, useState } from "react";

export interface Product {
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
  loading: boolean;
  paginationInfo: PaginationInfo
}

interface ProductsProviderProps {
  children: ReactNode;
}

interface PaginationInfo {
  isNextPageAvailable: boolean;
  currentPage: number; 
}

export const ProductsContext = createContext<ProductContextProps>({} as ProductContextProps);

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [productList, setProductList] = useState<Product[]>([])
  const [productFilteredList, setProductFilteredList] = useState<Product[]>([])
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({currentPage: 1, isNextPageAvailable: true})

  const getData = async (pageNumber: number = 1, pageSize: number = 12) => {
    setLoading(true)
    try {
      const response = await fetch(
        `http://localhost:3000/products?pageSize=${pageSize + 1}&pageNumber=${pageNumber}`
      );
      const products: Product[] = await response.json();

      setPaginationInfo({
        isNextPageAvailable: products.length > pageSize,
        currentPage: pageNumber,
      })
      console.log(productList)
      setProductList(products.slice(0, pageSize))

    } catch (error) {
      console.error("Error: DataProvider.context.tsx:41 ~ getData:", error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  

  const filter = ({ category, price, rating, name }: Partial<Pick<Product, 'category' | 'price' | 'rating' | 'name' >>) => {
    //funcão de filtro
  }

  return (
    <ProductsContext.Provider
      value={{ 
        refreshData: () => getData(), 
        changePage: getData, 
        filter, 
        products: productFilteredList, 
        loading,
        paginationInfo
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};


