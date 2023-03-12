import axios from "axios";
import { ADDNEWTODO, COMPLETE, DELETE_TO_DO, GETTODO } from "./TodoActionType";

//get to do data
export const getTodData = () => async (dispatch) => {
  try {
    await axios
      .get(`http://localhost:5050/todos`)
      .then((res) => {
        dispatch({ type: GETTODO, payload: res.data });
      })
      .catch((error) => {
        console.error(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

// add new to do
export const addNewToDo = (payload) => async (dispatch) => {
  try {
    await axios
      .post(`http://localhost:5050/todos`, {
        name: payload,
        complete: false,
      })
      .then((res) => {
        dispatch({ type: ADDNEWTODO, payload: res.data });
      })
      .catch((error) => {
        console.error(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

// add new to do
export const deleteToDo = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`http://localhost:5050/todos/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_TO_DO, payload: id });
      })
      .catch((error) => {
        console.error(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

// add new to do complete
export const ToDoComplete = (id, data) => async (dispatch) => {
  try {
    await axios
      .put(`http://localhost:5050/todos/${id}`, { complete: data })
      .then((res) => {
        dispatch({ type: COMPLETE, payload: id });
      })
      .catch((error) => {
        console.error(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};
