import { MenuItemType } from './ItemType';

// single menu item
export interface MenuItem {
  name: string;
  ingredients: [string];
  image: string; // store path of image for now
  price: number;
  stockCount: number;
  type: MenuItemType;
}

// menu skeleton
export interface Menu {
  MenuItem: MenuItem;
}
