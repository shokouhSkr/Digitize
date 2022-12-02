import home from "./assets/images/icons/home.svg";
import category from "./assets/images/icons/category.svg";
import bag from "./assets/images/icons/bag.svg";
import fav from "./assets/images/icons/lovely.svg";
import phoneCat from "./assets/images/icons/phone-category-icon.svg";
import laptopCat from "./assets/images/icons/laptop-category-icon.svg";
import watchCat from "./assets/images/icons/watch-category-icon.svg";

import productImg from "./assets/images/products/image 8.png";
import smartwatchImg from "./assets/images/products/smartwatch.png";
import smartwatchImg2 from "./assets/images/products/smartwatch2.png";

import apple from "./assets/images/brands-logo/apple.svg";
import asus from "./assets/images/brands-logo/asus.svg";
import lenovo from "./assets/images/brands-logo/lenovo.svg";
import xiaomi from "./assets/images/brands-logo/image 23.svg";

export const links = [
  {
    id: 1,
    url: "/",
    title: "خانه",
    icon: `${home}`,
  },
  {
    id: 2,
    url: "/category",
    title: "دسته‌‌بندی",
    icon: `${category}`,
  },
  {
    id: 3,
    url: "/cart",
    title: "سبد‌خرید",
    icon: `${bag}`,
  },
  {
    id: 4,
    url: "/favorites",
    title: "علاقه‌مندی",
    icon: `${fav}`,
  },
];

export const brands = [
  {
    id: 11,
    title: "اپل",
    image: `${apple}`,
  },
  {
    id: 22,
    title: "شیائومی",
    image: `${xiaomi}`,
  },
  {
    id: 33,
    title: "ایسوس",
    image: `${asus}`,
  },
];

export const productsCategories = [
  {
    id: 111,
    title: "تلفن همراه",
    category: "cellphone",
    icon: `${phoneCat}`,
    // image: `${}`
  },
  {
    id: 222,
    title: "لپ تاپ",
    category: "laptop",
    icon: `${laptopCat}`,
    // image: `${}`
  },
  {
    id: 333,
    title: "ساعت هوشمند",
    category: "smartphone",
    icon: `${watchCat}`,
    // image: `${}`
  },
];

export const products = [
  {
    id: 1111,
    title: "ساعت هوشمند اپل سری6",
    price: "2,250,000",
    image: `${smartwatchImg}`,
    brand: "اپل",
  },
  {
    id: 2222,
    title: "ساعت هوشمند اپل سری6",
    price: "2,250,000",
    image: `${smartwatchImg2}`,
    brand: "اپل",
  },
  {
    id: 3333,
    title: "ساعت هوشمند اپل سری6",
    price: "2,250,000",
    image: `${smartwatchImg}`,
    brand: "اپل",
  },
  {
    id: 4444,
    title: "ساعت هوشمند اپل سری6",
    price: "2,250,000",
    image: `${smartwatchImg2}`,
    brand: "اپل",
  },
  {
    id: 5555,
    title: "ساعت هوشمند اپل سری6",
    price: "2,250,000",
    image: `${smartwatchImg}`,
    brand: "اپل",
  },
  {
    id: 6666,
    title: "ساعت هوشمند اپل سری6",
    price: "2,250,000",
    image: `${smartwatchImg2}`,
    brand: "اپل",
  },
];
