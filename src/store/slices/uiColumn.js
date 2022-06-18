import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
  items: [
    {
      id: "1",
      title: "hello",
    },
  ],
};

const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    isShow(state, action) {
      state.isShow = !state.isShow;
    },
    addColumn(state, action) {
      const newTodo = action.payload;
      state.items.pop();
      state.items.push(newTodo.todo, newTodo.hello);
    },
    addTodo(state, action) {
      const newTodo = action.payload;
      console.log(state.items);
    },
    deleteColumn(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const uiColumnActions = columnSlice.actions;
export default columnSlice;
