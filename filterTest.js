

import { filterArr } from "./utils/filter.js";
const techProducts2026 = [
  {
    id: 1,
    name: "NVIDIA Blackwell B200 GPU",
    category: "AI Hardware",
    price: 35000.00,
    currency: "USD"
  },
  {
    id: 2,
    name: "TCL X11L SQD Mini-LED TV (75\")",
    category: "Home Entertainment",
    price: 7000.00,
    currency: "USD"
  },
  {
    id: 3,
    name: "Navimow X430 Robot Mower",
    category: "Smart Home",
    price: 2499.00,
    currency: "USD"
  },
  {
    id: 4,
    name: "Apple HomePod (Latest Gen)",
    category: "Smart Speaker",
    price: 299.00,
    currency: "USD"
  },
  {
    id: 5,
    name: "Nest Learning Thermostat Gen 4",
    category: "Smart Home",
    price: 240.00,
    currency: "USD"
  },
  {
    id: 6,
    name: "Aqara Camera Hub G5 Pro",
    category: "Security",
    price: 159.99,
    currency: "USD"
  },
  {
    id: 7,
    name: "Arzopa D14 Portable Monitor",
    category: "Computing",
    price: 139.99,
    currency: "USD"
  }
];




console.log(filterArr(techProducts2026,"ID","=",3))
;


