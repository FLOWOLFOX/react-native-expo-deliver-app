import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

  }
})

export default basketSlice.reducer;