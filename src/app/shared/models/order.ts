import { OrderListItem } from './order-list-item';

export interface Order {
  _id?: string;
  date?: Date;
  order?: number;
  user?: string;
  list: OrderListItem[];
}
