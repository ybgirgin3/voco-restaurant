import { RestaurantType } from './ItemType';
import { Menu } from './Menu';

export interface Reviews {
  username: string;
  star: number;
  comment: string;
}

export interface Restaurant {
  name: string;
  rate: number;
  location: string;
  menus: [Menu];
  type: RestaurantType;
  reviews: [Reviews];
}
