import React from "react";
import { createContext, useState } from "react";

export const CategoryContext = createContext({
  category: [],
  SetCategoryToCatalog: () => { }
});

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  const SetCategoryToCatalog = (category) => {
    setCategory(category);
  };

  const value = { category, SetCategoryToCatalog };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

