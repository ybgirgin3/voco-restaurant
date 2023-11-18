import { Menu } from './Menu';

export interface Order {
  user: number;
  menu: Menu;
  createdAt: string; // this needs to be a date, but i just couldn't create a date object in ts :(
  status: number;
}
