import React from "react";
import { Layout, Menu, Badge, theme } from "antd";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const { Header } = Layout;

// This component will show the Navbar.
const Navbar = ({ cartItemCount }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLinkClick = (event) => {
    event.preventDefault();
  };

  return (
    <Header className={classes.headerContainer}>
      <Menu mode="horizontal" className={classes.navMenu}>
        <Menu.Item key="home" className={classes.navItem}>
          <Link to="/" onClick={handleLinkClick}>
            eCommerce
          </Link>
        </Menu.Item>
        <Menu.Item key="products" className={classes.navItem}>
          <Link to="/">Products</Link>
        </Menu.Item>
        <Menu.Item key="add-product" className={classes.navItem}>
          <Link to="/add-product">Add a product</Link>
        </Menu.Item>
        <Menu.Item key="Cart" className={classes.navItem}>
          <Link to="/cart">
            <Badge count={cartItemCount} className={classes.badge}>
              <span className={classes.cartIcon}>Cart</span>
            </Badge>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
