import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app/store';
import {
  getProductsFromStorage,
  setProductsToStorage,
} from '../services/storage';
import { Product } from '../types/product-types';

interface BasketState {
  basket: Product[];
}

const productsFromStorage = getProductsFromStorage();

const initialState: BasketState = {
  basket: productsFromStorage ? JSON.parse(productsFromStorage) : [],
};

export const basketSlice = createSlice({
  name: 'Basket-State-Slice',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.basket.push(action.payload);
      setProductsToStorage(state.basket);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.basket = state.basket.filter(
        (product: Product) => product.id !== action.payload
      );
      setProductsToStorage(state.basket);
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.basket = action.payload;
      setProductsToStorage(state.basket);
    },
  },
});

export const { addProduct, removeProduct, setProducts } = basketSlice.actions;

export const selectProducts = (state: RootState) => state.basket.basket;

export default basketSlice.reducer;
