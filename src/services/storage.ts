import { BasketItem, Product } from '../types/product-types';
import { User } from '../types/user-types';

export function getUserFromStorage(): string | null {
  return localStorage.getItem('@user');
}

export function setUserToStorage(user: User): void {
  localStorage.setItem('@user', JSON.stringify(user));
}

export function removeUserFromStorage(): void {
  return localStorage.removeItem('@user');
}

export function getFavoritesFromStorage(): string | null {
  return localStorage.getItem('favorites');
}

export function setFavoritesToStorage(favorites: Product[]): void {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function removeFavoritesFromStorage(): void {
  return localStorage.removeItem('favorites');
}

export function getProductsFromStorage(): string | null {
  return localStorage.getItem('products');
}

export function setProductsToStorage(products: BasketItem[]): void {
  localStorage.setItem('products', JSON.stringify(products));
}

export function removeProductsFromStorage(): void {
  return localStorage.removeItem('products');
}
