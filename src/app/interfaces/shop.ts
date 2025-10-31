import { Menu } from "./menu";

export interface Shop {
  id: number;
  name: string;
  description: string;
  address: string;
  hours: string;
  img: string;
  link: string;
  phone: string;
  banner: string;
  status: boolean;
  tags: string[];
  hasDelivery: boolean;
  deliveryPrice: number;
  rating: number;
  ratingReview: number;
  menu: Menu[]
}
