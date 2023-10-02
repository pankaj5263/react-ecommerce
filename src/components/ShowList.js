import React from "react";
import { List, Card, Button, Space, Row, Col } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// This component will render the List of product into the UI.
const ShowList = (props) => {

  const {sortedProductList, renderEditFields, handleEdit, handleDelete, toggleSortOrder, clearSort, orderByPrice, editingProduct} = props;
  return (
    <>
      <div>
        {!orderByPrice && (
          <Button
            type="primary"
            onClick={toggleSortOrder}
            style={{ width: "150px", marginLeft: "63%", marginTop: "2%" }}
          >
            Sort by Price
          </Button>
        )}
        {orderByPrice && (
          <Button
            type="primary"
            danger
            onClick={clearSort}
            style={{ width: "150px", marginLeft: "63%", marginTop: "2%" }}
          >
            &#10005; Clear Sort
          </Button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#FFDEB4",
        }}
      >
        <List
          itemLayout="vertical"
          dataSource={sortedProductList}
          style={{ maxWidth: "50%" }}
          renderItem={(item) => (
            <List.Item>
              <Card>
                <Row>
                  <Col span={8}>
                    <img
                      alt={item.title}
                      src={item.image}
                      style={{ maxWidth: "40%" }}
                    />
                  </Col>
                  <Col span={16}>
                    {renderEditFields(item)}
                    <Space>
                      <Button
                        icon={<EditOutlined />}
                        type="primary"
                        onClick={() => handleEdit(item.id)}
                      >
                        {editingProduct === item.id ? "Save" : "Edit"}
                      </Button>
                      <Button
                        icon={<DeleteOutlined />}
                        type="danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </Space>
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      </div>
      <ToastContainer/>
    </>
  );
};

export default ShowList;
