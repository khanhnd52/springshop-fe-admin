import axios from "axios";
import { API_MANUFACTURER } from "./constant";

export default class ManufacturerService {
  insertManufacturer = async (manufacturer) => {
    let formData = new FormData();

    formData.append("name", manufacturer.name);
    if (manufacturer.logoFile[0].originFileObj) {
      formData.append("logoFile", manufacturer.logoFile[0].originFileObj);
    }
    return await axios.post(API_MANUFACTURER, formData);
  };
  getManufacturers = async () => {
    return await axios.get(API_MANUFACTURER);
  };
  deleteManufacturer = async (id) => {
    return await axios.delete(API_MANUFACTURER + "/" + id);
  };
  getManufacturer = async (id) => {
    return await axios.get(API_MANUFACTURER + "/" + id + "/get");
  };
  getManufacturersByName = async (params) => {
    return await axios.get(API_MANUFACTURER + "/find", { params });
  };
  updateManufacturer = async (id, manufacturer) => {
    let formData = new FormData();

    formData.append("name", manufacturer.name);
    if (manufacturer.logoFile[0].originFileObj) {
      formData.append("logoFile", manufacturer.logoFile[0].originFileObj);
    }

    return await axios.patch(API_MANUFACTURER + "/" + id, formData);
  };
  static getManufacturerLogoUrl = (fileName) => {
    return API_MANUFACTURER + "/logo/" + fileName;
  };
}
