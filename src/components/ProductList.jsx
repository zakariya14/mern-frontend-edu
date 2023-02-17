import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getProducts = async () => {
    const response = await axios.get("http://127.0.0.1:4000/product");
    setProduct(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:4000/product/${id}`);
      getProducts();
      //   alert("Product successfully deleted.");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-10 ms-5 mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Link to="add" className="btn btn-outline-primary">
                  Add New
                </Link>
              </div>
              <div className="col-md-6">
                <Form.Group className="" controlId="formBasicPrice">
                  <Form.Control type="text" placeholder="Search products by name" value={searchTerm} onChange={handleSearch} />
                </Form.Group>
              </div>
            </div>
          </div>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => {
                return (
                  <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td className="text-center">
                      <Link to={`/detail/${product._id}`} className="btn btn-sm btn-outline-info mx-1">
                        Detail
                      </Link>
                      <Link to={`/edit/${product._id}`} className="btn btn-sm btn-outline-warning mx-1">
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          if (window.confirm("Are you sure you want to delete this data?")) {
                            deleteProduct(product._id);
                          }
                        }}
                        className="btn btn-sm btn-outline-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
