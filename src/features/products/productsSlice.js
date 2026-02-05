import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 1,
      name: 'Силіконова форма для випічки',
      price: 15,
      category: 'Інструменти',
    },
    {
      id: 2,
      name: 'Какао-порошок',
      price: 8,
      category: 'Сировина',
    },
    {
      id: 3,
      name: 'Кондитерський мішок',
      price: 5,
      category: 'Інструменти',
    },
  ],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export default productsSlice.reducer