import { forwardRef, useState } from "react";
import { Alert, Container } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import { v4 as uuidv4 } from "uuid";
// import React, { Component } from "react";
import { addProduct } from "../../store/productSlice";

function Inputform(props) {
  const { product, setProduct } = props;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    imageProduct: "",
    productFresh: "brandNew", // Default value
    addDescription: "",
    productPrice: "",
  });

  const [formErrors, setFormErrors] = useState({
    productName: false,
    productCategory: false,
    imageProduct: false,
    productFresh: false,
    addDescription: false,
    productPrice: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { productName, productCategory, imageProduct, productFresh, addDescription, productPrice } = formData;

    const errors = {
      productName: !productName.trim(),
      productCategory: !productCategory,
      imageProduct: !imageProduct,
      productFresh: !productFresh,
      addDescription: !addDescription.trim(),
      productPrice: !productPrice,
    };

    if (Object.values(errors).some((error) => error)) {
      setFormErrors(errors);
      return;
    }

    const product = {
      id: uuidv4(),
      name: productName,
      category: productCategory,
      image: imageProduct,
      freshness: productFresh,
      description: addDescription,
      price: productPrice,
    };

    // Dispatch aksi untuk menambahkan produk
    dispatch(addProduct(product));

    // Setel ulang formulir dan error
    setFormData({
      productName: "",
      productCategory: "",
      imageProduct: "",
      productFresh: "brandNew",
      addDescription: "",
      productPrice: "",
    });
    setFormErrors({
      productName: false,
      productCategory: false,
      imageProduct: false,
      productFresh: false,
      addDescription: false,
      productPrice: false,
    });
  };
  return (
    <Container>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Detail Product</h2>
          {/*--------------- FORM Tag -----------------------*/}
          <Form className="mb-3" id="myForm" onSubmit={handleSubmit}>
            <Row className="col-10">
              <label htmlFor="inputProduct" className="form-label">
                Product name :
              </label>
              <br />
              <input type="text" className="form-control" id="productName" name="productName" style={{ borderColor: formErrors.productName ? "red" : "" }} value={formData.productName} onChange={handleInputChange} required />
              {formErrors.productName && <div className="error">{formErrors.productName}</div>}
              <br />
            </Row>
            <Row className="col-10">
              <label htmlFor="inputProductCategory" className="form-label">
                Product Category :
              </label>
              <br />
              <div className="input-group">
                <select className="form-select" id="productCategory" name="productCategory" aria-label="Example select with button addon" value={formData.productCategory} onChange={handleInputChange}>
                  <option selected="">Choose...</option>
                  <option value="1">1Satu</option>
                  <option value="2">2Dua</option>
                  <option value="3">3Tiga</option>
                </select>
                {/* {isProductCategoryError && <Alert>The xxx field must be filled in</Alert>} */}
              </div>
            </Row>
            <Row className="col-10">
              <label htmlFor="inputImage" className="form-label">
                Image of Product
              </label>
              <div className="mb-3">
                <input className="form-control" type="file" id="inputImage" name="imageProduct" accept=".jpg, .jpeg, .png" value={formData.imageProduct} onChange={handleInputChange} />
                {/* {isImageProductError && <Alert>The xxx field must be filled in</Alert>} */}
              </div>
            </Row>
            <Row>
              <p>Product Freshness :</p>
              <div id="productFresh">
                <label>
                  <input type="radio" name="productFresh" value="brandNew" id="brandNew" checked={formData.productFresh === "brandNew"} onChange={handleInputChange} /> Brand New
                </label>
                <br />
                <label>
                  <input type="radio" name="productFresh" value="secondHand" id="secondHand" checked={formData.productFresh === "secondHand"} onChange={handleInputChange} /> Second Hand
                </label>
                <br />
                <label>
                  <input type="radio" name="productFresh" value="refurbished" id="refurbished" checked={formData.Fresh === "refurbished"} onChange={handleInputChange} /> Refurbished
                </label>
                {/* {isProductFreshError && <Alert>The xxx field must be filled in</Alert>} */}
              </div>
            </Row>
            <br />
            <Row className="col-10">
              <label htmlFor="description">Additional Description :</label>
              <br />
              <div className="mb-3">
                <textarea className="form-control" id="description" name="addDescription" rows={3} value={formData.addDescription} onChange={handleInputChange} />
                {formErrors.addDescription && <div className="error">{formErrors.addDescription}</div>}
              </div>
            </Row>
            <br />
            <Row className="col-10">
              <label htmlFor="price">Product Price</label>
              <br />
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="productPrice"
                  id="price"
                  style={{ borderColor: formErrors.productPrice ? "red" : "" }}
                  placeholder="$ 1"
                  value={formData.productPrice}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.productPrice && <div className="error">{formErrors.productPrice}</div>}
              </div>
            </Row>
            <br />
            <Row className="d-grid gap-2 col-8 mx-auto">
              <button className="btn btn-primary" id="submitButton " type="submit">
                Submit
              </button>
            </Row>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default Inputform;
