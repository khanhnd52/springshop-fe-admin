import ManufacturerService from "../../services/manufacturerService";
import {
  COMMON_ERROR_SET,
  COMMON_LOADING_SET,
  COMMON_MESSAGE_SET,
  MANUFACTURER_SET,
} from "./actionTypes";

export const insertManufacturer = (manufacturer) => async (dispatch) => {
  const service = new ManufacturerService();

  try {
    console.log("insert manufacturer");

    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });

    const response = await service.insertManufacturer(manufacturer);

    if (response.status === 201) {
      dispatch({
        type: MANUFACTURER_SET,
        payload: response.data,
      });
      dispatch({
        type: COMMON_MESSAGE_SET,
        payload: "Manufacturer is saved",
      });
    } else {
      dispatch({
        type: COMMON_ERROR_SET,
        payload: response.message,
      });
    }

    console.log(response);
  } catch (error) {
    console.log("Error" + error);
    dispatch({
      type: COMMON_ERROR_SET,
      payload: error.response.data
        ? error.response.data.message
        : error.message,
    });
  }
  dispatch({
    type: COMMON_LOADING_SET,
    payload: false,
  });
};
