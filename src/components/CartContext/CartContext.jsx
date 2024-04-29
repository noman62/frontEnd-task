// CartContext.js
import { createContext } from 'react';

export const MyContext = createContext({
  cart: [],
  setCart: () => {},
});
