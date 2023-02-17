// // import axios from "axios";
// // import React, { useCallback, useEffect, useState } from "react";
// // import Button from "react-bootstrap/Button";
// // import Form from "react-bootstrap/Form";
// // import { useNavigate, useParams } from "react-router-dom";

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const DetailProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const response = await axios.get(`http://localhost:4000/product/${id}`);
//       setProduct(response.data);
//     };
//     fetchProduct();
//   }, [id]);

//   return (
//     <div className="container">
//       <h2>Product Detail</h2>
//       <p>
//         <b>ID: </b>
//         {product._id}
//       </p>
//       <p>
//         <b>Name: </b>
//         {product.name}
//       </p>
//       <p>
//         <b>Price: </b>
//         {product.price}
//       </p>
//       <p>
//         <b>Stock: </b>
//         {product.stock}
//       </p>
//       <p>
//         <b>Status: </b>
//         {product.status ? "Active" : "Inactive"}
//       </p>
//     </div>
//   );

//   //   const [name, setName] = useState("");
//   //   const [price, setPrice] = useState("");
//   //   const [stock, setStock] = useState("");
//   //   const [status, setStatus] = useState(false);
//   //   const navigate = useNavigate();
//   //   const { id } = useParams();

//   //   const getProductById = useCallback(async () => {
//   //     const response = await axios.get(`http://127.0.0.1:4000/product/${id}`);
//   //     setName(response.data.name);
//   //     setPrice(response.data.price);
//   //     setStock(response.data.stock);
//   //     setStatus(response.data.status);
//   //   }, [id, setName, setPrice, setStock, setStatus]);

//   //   useEffect(() => {
//   //     getProductById();
//   //   }, [getProductById]);

//   //   const EditProduct = async (e) => {
//   //     e.preventDefault();
//   //     try {
//   //       await axios.patch(`http://127.0.0.1:4000/product/${id}`, { name, price, stock, status });
//   //       navigate("/");
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };

//   //   return (
//   //     <div className="container">
//   //       <div className="row justify-content-center">
//   //         <div className="col-md-6 mt-3">
//   //           <Form onSubmit={EditProduct}>
//   //             <h1>Update Product</h1>
//   //             <Form.Group className="mb-3" controlId="formBasicName">
//   //               <Form.Label>Name</Form.Label>
//   //               <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
//   //             </Form.Group>
//   //             <Form.Group className="mb-3" controlId="formBasicPrice">
//   //               <Form.Label>Price</Form.Label>
//   //               <Form.Control type="price" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} />
//   //             </Form.Group>
//   //             <Form.Group className="mb-3" controlId="formBasicStock">
//   //               <Form.Label>Stock</Form.Label>
//   //               <Form.Control type="stock" placeholder="Enter stock" value={stock} onChange={(e) => setStock(e.target.value)} />
//   //             </Form.Group>

//   //             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//   //               <Form.Check type="checkbox" checked={status} onChange={(e) => setStatus(e.target.checked)} />
//   //             </Form.Group>
//   //             <Button variant="outline-info" type="submit" size="sm">
//   //               Update
//   //             </Button>
//   //           </Form>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
// };

// export default DetailProduct;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:4000/product/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  return (
    <Container className="d-flex justify-content-center">
      <div className="w-50">
        <h2 className="text-center my-3">Product Detail</h2>

        <Row className="mb-3">
          <Col sm={2}>
            <b>ID:</b>
          </Col>
          <Col sm={10}>
            <p>{product._id}</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={2}>
            <b>Name:</b>
          </Col>
          <Col sm={10}>
            <p>{product.name}</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={2}>
            <b>Price:</b>
          </Col>
          <Col sm={10}>
            <p>{product.price}</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={2}>
            <b>Stock:</b>
          </Col>
          <Col sm={10}>
            <p>{product.stock}</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={2}>
            <b>Status:</b>
          </Col>
          <Col sm={10}>
            <p>{product.status ? "Active" : "Inactive"}</p>
          </Col>
        </Row>
        <Button variant="outline-secondary mx-2" size="sm" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
    </Container>
  );
};

export default DetailProduct;
