export interface Address {
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
}

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  age?: number;
  gender?: string;
  email?: string;
  phone?: string | null;
  username?: string;
  password?: string;
  birthDate?: Date | null;
  image?: string | null;
  token?: string;
  expiresIn?: number;
  address?: Address;
  bank?: Bank;
}

export interface LoginRequest {
  username: string;
  password: string;
  expiresInMins?: number;
}

export interface AuthResponse {
  token: string;
  expiresIn: number;
}
