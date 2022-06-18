import { createSlice } from "@reduxjs/toolkit";

const initialState = 
  {
    email: "a@gmail.com",
    password: "123",
  }
 

const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state,action){
      const newData = action.payload
    }
  },
});

export const uiActions = cartSlice.actions
export default cartSlice;
