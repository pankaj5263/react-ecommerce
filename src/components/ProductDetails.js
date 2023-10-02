import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Card, Rate, Button } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";
import {addCartProduct} from '../store/action';

// This component will showed products details.
const ProductDetails = () => {
  const { productId } = useParams(); 
  const { allProduct:{productList}, cartProduct:{cart} } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [product] = productList.filter(product => product.id == productId);

  const cartHandler = (id) => {
    const [data] = productList.filter(product=>product.id == id);
    dispatch(addCartProduct(data));
  }
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'5%' }}>
      <Card
        style={{ width: 400, marginBottom: '20px' }}
        cover={
          <img
            alt={product.title}
            src={product.image}
            height={250}
            width={150}
          />
        }
      >
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <Rate allowHalf disabled value={product.rating} />
        <Button type="primary" style={{ marginLeft:'20%' }} icon={<ShoppingCartOutlined />} onClick={()=>cartHandler(product.id)} >Add to Cart</Button>
      </Card>
    </div>
  );
};

export default ProductDetails;
