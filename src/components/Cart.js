import { List, Avatar, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCartProduct } from "../store/action";
import classes from "./Cart.module.css";
import {notification} from "./utils";
import { ToastContainer } from 'react-toastify';

// This component will show the list of adde products into the cart.
const Cart = ({ cartData }) => {
  const { cartProduct: { cart }} = useSelector((state) => state);
  const dispatch = useDispatch();

  // This function will removed products from the cart.
  const removeFromCart = (id, index) => {
    const cartData = [...cart];
    cartData.splice(index, 1);
    dispatch(removeFromCartProduct(cartData));
    notification("removed from cart")
  };

  return (
    <>
    <List
      itemLayout="horizontal"
      dataSource={cartData}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.image} />}
            title={item.title}
            description={item.description}
          />
          <Button
            type="primary"
            onClick={() => removeFromCart(item.id, index)}
            icon={<DeleteOutlined />}
          >
            Remove
          </Button>
        </List.Item>
      )}
      className={classes["cart-container"]}
      style={{marginTop:"5%"}}
    />
    <ToastContainer/>
    </>
  );
};

export default Cart;
