import CategoryService from "../../services/categoryService";
import {
  CATEGORIES_SET,
  CATEGORY_SET,
  CATEGORY_STATE_CLEAR,
  COMMON_ERROR_SET,
  COMMON_MESSAGE_SET,
} from "./actionTypes";

export const insertCategory = (category, navigate) => async (dispatch) => {
  const service = new CategoryService();

  try {
    console.log("insert category");

    const response = await service.insertCategory(category);

    if (response.status === 201) {
      dispatch({
        type: CATEGORY_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: 'Category is saved'
      })
    }else {
      dispatch({
        type: COMMON_ERROR_SET,
        payload: response.message
      })
    }

    console.log(response);
  } catch (error) {
    console.log("Error" + error);
    dispatch({
      type: COMMON_ERROR_SET,
      payload: error
    })
  }

  navigate("/categories/list");
};

export const getCategories = () => async (dispatch) => {
  const service = new CategoryService();

  try {
    console.log("get categories");
    const response = await service.getCategories();

    console.log(response)

    if (response.status === 200) {
      dispatch({
        type: CATEGORIES_SET,
        payload: response.data,
      });
    } else {
      dispatch({
        type: COMMON_ERROR_SET,
        payload: response.message
      })
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: COMMON_ERROR_SET,
      payload: error
    })
  }
};

export const clearCategoryState = () => (dispatch) => {
  dispatch({ type: CATEGORY_STATE_CLEAR });
};
