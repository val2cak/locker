import { NonIndexRouteObject } from 'react-router-dom';

export interface CustomRouteObject extends NonIndexRouteObject {
  name: string;
  children?: CustomRouteObject[];
}

export interface Navigation {
  id: number;
  name: string;
  route: string;
}
