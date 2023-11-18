import { Menu } from '../interfaces/Menu';
import { MenuItemType, RestaurantType } from '../interfaces/ItemType';
import { MenuItem } from '../interfaces/Menu';
import { Restaurant, Reviews } from '../interfaces/Restaurant';
import { Order } from '../interfaces/Order';
import moment from 'moment';

const getCurrentTime = () => {
  return moment().format('DD MMM YYY HH:mm:ss');
};

// ** MENU
const menuItemMock: MenuItem = {
  name: 'hamburger',
  ingredients: ['meat'],
  image: 'mock/image',
  price: 100,
  stockCount: 1000,
  type: MenuItemType.Turkish,
};

export const menuMock: Menu = {
  MenuItem: menuItemMock,
};

// ** RESTAURANT
const reviewsMock: Reviews = {
  username: 'anonim',
  star: 5,
  comment: 'I like the taste',
};

export const restaurantMock: Restaurant = {
  name: 'Oncu',
  rate: 4.7,
  location: 'cark caddesi',
  menus: [menuMock],
  reviews: [reviewsMock],
  type: RestaurantType.Turkish,
};

// ** ORDER
export const orderMock: Order = {
  user: 1,
  menu: menuMock,
  createdAt: '2023-11-18',
  status: 1,
};
