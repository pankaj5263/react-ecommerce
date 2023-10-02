import { toast } from "react-toastify";
import { URL } from "./constant";

// This function will show the toast notification on the app.
export const notification = (text) => {
  toast.success(`Product ${text} successfully!`, {
    position: toast.POSITION.TOP_CENTER,
  });
};


// This function will return data from the server.
export const fetchProductData = async () => {
  const productList = await fetch(URL);
  const data = await productList.json();
  return data;
};
