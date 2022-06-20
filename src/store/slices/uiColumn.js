import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
  isShowTodo: false,
  items: [],
};

const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    isShow(state) {
      state.isShow = !state.isShow;
    },
    todoShow(state) {
      state.isShowTodo = !state.isShowTodo;
    },
    addColumn(state, action) {
      const newColumn = action.payload;
      state.items.push({
        id: newColumn.id,
        title: newColumn.title,
        todos: [],
      });
    },
    addTodo(state, action) {
      const { todoData, id } = action.payload;
      console.log(todoData, +"addtodo" + id);
      state.items.map((item) => {
        if (item.id === id) {
          item.todos.push({
            todo: todoData,
          });
        }
      });
    },
    searchItems(state, action) {
      let data = action.payload.includes();
      console.log(data);
      if (data.length > 0) {
        state.items.filter((item) => {
          return item.title.toLowerCase().includes(data.toLowerCase());
        });
      }
    },
    deleteColumn(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const uiColumnActions = columnSlice.actions;
export default columnSlice;
