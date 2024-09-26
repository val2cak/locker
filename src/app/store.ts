import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { authApiSlice } from '../hooks/auth-api';
import { productsApiSlice } from '../hooks/products-api';
import basketStateReducer from '../hooks/basket-state';
import favoritesStateReducer from '../hooks/favorites-state';

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    basket: basketStateReducer,
    favorites: favoritesStateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApiSlice.middleware,
      productsApiSlice.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
