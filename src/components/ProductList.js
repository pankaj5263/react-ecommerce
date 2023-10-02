import React, { useState, useEffect } from "react";
import { Rate, Input } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, editProduct } from "../store/action";
import "react-toastify/dist/ReactToastify.css";
import ShowList from "./ShowList";
import { notification } from "./utils";
import { fetchProductData } from "./utils";
import { showProduct } from "../store/action";

const ProductList = () => {
  const { allProduct: { productList }} = useSelector((state) => state);
  const dispatch = useDispatch();
  const [editingProduct, setEditingProduct] = useState(null);
  const [orderByPrice, setOrderByPrice] = useState(null);
  const [editedFields, setEditedFields] = useState({
    title: "",
    description: "",
    price: "",
    rating: 0,
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductData();
        dispatch(showProduct(data));
      } catch (error) {
        // Handle errors if fetchProductData fails
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  // This function helps to edit product.
  const handleEdit = (productId) => {
    // Toggle edit mode for the selected product
    if (editingProduct === productId) {
      handleSave(productId);
      setEditingProduct(null);
    } else {
      setEditingProduct(productId);
      // Populate the editedFields state with the current values
      const product = productList.find((item) => item.id === productId);
      setEditedFields({
        title: product.title,
        description: product.description,
        price: product.price,
        rating: product.rating,
      });
    }
  };

// This function will save the new product to the database or into list of products. 
  const handleSave = (productId) => {
    console.log("Saving changes for product:", editedFields);
    const data = [...productList];
    const dataIndex = data.findIndex((ele) => ele.id === productId);
    const finalData = { ...data[dataIndex], ...editedFields };
    console.log("finalData", finalData);
    data[dataIndex] = finalData;

    dispatch(editProduct(data));
    notification("edited");
  };

  // This function will delete the product.
  const handleDelete = (productId) => {
    const data = [...productList];
    const index = data.findIndex((ele) => ele.id === productId);
    data.splice(index, 1);
    dispatch(deleteProduct(data));
    notification("deleted");
  };

  // This function will render input or show fields for the product.
  const renderEditFields = (item) => {
    if (editingProduct === item.id) {
      return (
        <div>
          <Input
            placeholder="Name"
            name="title"
            value={editedFields.title}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            placeholder="Description"
            name="description"
            value={editedFields.description}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            placeholder="Price"
            name="price"
            value={editedFields.price}
            onChange={(e) => handleInputChange(e)}
          />
          <Rate
            allowHalf
            value={editedFields.rating}
            onChange={(value) => handleRatingChange(value)}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Link to={`/product-details/${item.id}`}>
            <h2>{item.title}</h2>
          </Link>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <Rate disabled allowHalf value={item.rating} />
        </div>
      );
    }
  };

  const handleInputChange = (e) => {
    // Update the editedFields state with the input values
    setEditedFields({
      ...editedFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (value) => {
    // Update the editedFields state with the rating value
    setEditedFields({
      ...editedFields,
      rating: value,
    });
  };

  const toggleSortOrder = () => {
    setOrderByPrice(true);
  };

  const clearSort = () => {
    setOrderByPrice(false);
  };

  const sortedProductList = [...productList].sort((a, b) => {
    if (orderByPrice) {
      return b.price - a.price;
    } else {
      // If sorting is not active, return the original order
      return 0;
    }
  });

  return (
    <ShowList
      sortedProductList={sortedProductList}
      renderEditFields={renderEditFields}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      toggleSortOrder={toggleSortOrder}
      clearSort={clearSort}
      orderByPrice={orderByPrice}
      editingProduct={editingProduct}
    />
  );
};

export default ProductList;
