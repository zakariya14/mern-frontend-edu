import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const getProductById = useCallback(async () => {
    const response = await axios.get(`http://127.0.0.1:4000/product/${id}`);
    setName(response.data.name);
    setPrice(response.data.price);
    setStock(response.data.stock);
    setStatus(response.data.status);
  }, [id, setName, setPrice, setStock, setStatus]);

  useEffect(() => {
    getProductById();
  }, [getProductById]);

  const EditProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://127.0.0.1:4000/product/${id}`, { name, price, stock, status });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-3">
          <Form onSubmit={EditProduct}>
            <h1>Update Product</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" placeholder="Enter stock" value={stock} onChange={(e) => setStock(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Active" checked={status} onChange={(e) => setStatus(e.target.checked)} />
            </Form.Group>
            <Button variant="outline-info" type="submit" size="sm">
              Update
            </Button>
            <Button variant="outline-secondary mx-2" size="sm" onClick={() => navigate("/")}>
              Back
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
