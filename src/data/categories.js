import bakingImg from "../assets/baking.jpg"
import foodImg from "../assets/food.jpg"
import packagingImg from "../assets/packaging.jpg"
export const categories = [
  {
    id: 'baking-tools',
    title: 'Товари для випічки',
    image: bakingImg,
    products: [
      {
        id: 1,
        name: 'Металева форма для випічки',
        price: 12,
      },
      {
        id: 2,
        name: 'Бумажна форма для кексу',
        price: 5,
      },
      {
        id: 3,
        name: 'Силіконовий коврик для випічки',
        price: 18,
      },
    ],
  },

  {
    id: 'food-products',
    title: 'Харчові продукти',
    image: foodImg,
    products: [
      {
        id: 4,
        name: 'Кондитерський шоколад',
        price: 10,
      },
      {
        id: 5,
        name: 'Пектин яблучний',
        price: 7,
      },
      {
        id: 6,
        name: 'Глюкозний сироп',
        price: 6,
      },
    ],
  },

  {
    id: 'packaging',
    title: 'Товари для пакування',
    image: packagingImg,
    products: [
      {
        id: 7,
        name: 'Коробка для торта',
        price: 4,
      },
      {
        id: 8,
        name: 'Підложка для торта',
        price: 3,
      },
      {
        id: 9,
        name: 'Коробка для кексу',
        price: 2,
      },
    ],
  },
]