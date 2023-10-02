import React from "react";
import { Button, Form, Input } from "antd";
import { productAdd } from "../store/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IMAGE } from "./constant";
import classes from "./AddProduct.module.css";
import { VALIDATE_MESSAGES } from "./constant";
import { ToastContainer } from 'react-toastify';
import { notification } from "./utils";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

// This function will save the data in the store.
const onFinish = (dispatch, values, navigate) => {
  const product = {
    id: Math.floor(Math.random() * 100),
    ...values.user,
    image: IMAGE,
  };
  dispatch(productAdd(product));
  notification('Added');

  setTimeout(()=>{
    navigate("/");
  }, 1500);
  
};

// This function will add the product into the List.
const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formItem = (title, name) => {
    return (
      <Form.Item
        name={["user", title]}
        label={name}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
    );
  };

  const AddButton = (
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        AddProduct
      </Button>
    </Form.Item>
  );

  return (
    <>
    <Form
      {...layout}
      name="AddProduct"
      onFinish={(values) => onFinish(dispatch, values, navigate)}
      className={classes.formContainer}
      validateMessages={VALIDATE_MESSAGES}
    >
      <div>
        <div style={{ marginLeft: "17%" }}>
          <h2>Add a Product</h2>
        </div>
        {formItem("title", "Name")}
        {formItem("description", "Description")}
        {formItem("price", "Price")}
        {formItem("rating", "Rating")}
        {AddButton}
      </div>
    </Form>
    <ToastContainer/>
    </>
  );
};

export default AddProduct;
