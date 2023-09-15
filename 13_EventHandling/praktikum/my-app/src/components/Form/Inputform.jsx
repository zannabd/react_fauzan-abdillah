import { useState } from "react";
import { Alert, Container } from "react-bootstrap";

import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
// import React, { Component } from "react";

function Inputform(props) {
  const { product, setProduct } = props;

  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [productFresh, setProductFresh] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const [isProductNameError, setIsProductNameError] = useState("");
  const [isProductCategoryError, setIsProductCategoryError] = useState(false);
  const [isImageProductError, setIsImageProductError] = useState(false);
  const [isProductFreshError, setIsProductFreshError] = useState(false);
  const [isAddDescriptionError, setIsAddDescriptionError] = useState(false);
  const [isProductPriceError, setIsProductPriceError] = useState(false);

  function handleProductName(e) {
    const value = e.target.value;
    let error = "";

    if (value.length > 25) {
      error = "Product Name must not exceed 25 characters.";
    }

    if (value.trim() === "") {
      error = "Please enter a valid product name.";
    }

    setProductName(value);
    setIsProductNameError(error);
  }

  function handleProductCategory(e) {
    const value = e.target.value;
    let error = "";

    if (value.trim() === "") {
      error = "Please enter a valid product category.";
    }

    setProductCategory(value);
    setIsProductCategoryError(error);
  }

  function handleImageProduct(e) {
    setImageProduct(e.target.value);
  }

  function handleProductFresh(e) {
    setProductFresh(e.target.value);
  }

  function handleAddDescription(e) {
    setAddDescription(e.target.value);
  }

  function handleProductPrice(e) {
    setProductPrice(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // jika input kosong, set error
    if (isProductNameError && productName.trim() !== "") {
      alert("Periksa lagi dan isi yang benar sebelum submit");
      return;
    } else if (productCategory === "") {
      setIsProductCategoryError(true);
    } else if (imageProduct === "") {
      setIsImageProductError(true);
    } else if (productFresh === "") {
      setIsProductFreshError(true);
    } else if (addDescription === "") {
      setIsAddDescriptionError(true);
    } else if (productPrice === "") {
      setIsProductPriceError(true);
    } else {
      const produk = {
        name: productName,
        category: productCategory,
        image: imageProduct,
        freshness: productFresh,
        description: addDescription,
        price: productPrice,
      };

      // add product ke table
      setProduct([...product, produk]);

      setIsProductNameError(false);
      setIsProductCategoryError(false);
      setIsImageProductError(false);
      setIsProductFreshError(false);
      setIsAddDescriptionError(false);
      setIsProductPriceError(false);
    }

    setProductName("");
    setProductCategory("");
    setImageProduct("");
    setProductFresh("");
    setAddDescription("");
    setProductPrice("");
  }

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
              <input type="text" className="form-control" id="productName" name="productName" style={{ borderColor: isProductNameError ? "red" : "" }} value={productName} onChange={handleProductName} required />
              {isProductNameError && <div className="error">{isProductNameError}</div>}
              <br />
            </Row>
            <Row className="col-10">
              <label htmlFor="inputProductCategory" className="form-label">
                Product Category :
              </label>
              <br />
              <div className="input-group">
                <select className="form-select" id="productCategory" name="productCategory" aria-label="Example select with button addon" value={productCategory} onChange={handleProductCategory}>
                  <option selected="">Choose...</option>
                  <option value="opsi1">1Satu</option>
                  <option value="opsi2">2Dua</option>
                  <option value="opsi3">3Tiga</option>
                </select>
                {isProductCategoryError && <Alert>The xxx field must be filled in</Alert>}
              </div>
            </Row>
            <Row className="col-10">
              <label htmlFor="inputImage" className="form-label">
                Image of Product
              </label>
              <div className="mb-3">
                <input className="form-control" type="file" id="inputImage" name="imageProduct" accept=".jpg, .jpeg, .png" value={imageProduct} onChange={handleImageProduct} />
                {isImageProductError && <Alert>The xxx field must be filled in</Alert>}
              </div>
            </Row>
            <Row>
              <p>Product Freshness :</p>
              <div id="productFresh">
                <label>
                  <input type="radio" name="productFresh" value="brandNew" id="brandNew" checked={productFresh === "brandNew"} onChange={handleProductFresh} /> Brand New
                </label>
                <br />
                <label>
                  <input type="radio" name="productFresh" value="secondHand" id="secondHand" checked={productFresh === "secondHand"} onChange={handleProductFresh} /> Second Hand
                </label>
                <br />
                <label>
                  <input type="radio" name="productFresh" value="refurbished" id="refurbished" checked={productFresh === "refurbished"} onChange={handleProductFresh} /> Refurbished
                </label>
                {isProductFreshError && <Alert>The xxx field must be filled in</Alert>}
              </div>
            </Row>
            <br />
            <Row className="col-10">
              <label htmlFor="description">Additional Description :</label>
              <br />
              <div className="mb-3">
                <textarea className="form-control" id="description" name="addDeskription" rows={3} value={addDescription} onChange={handleAddDescription} />
                {isAddDescriptionError && <div className="error">{isAddDescriptionError}</div>}
              </div>
            </Row>
            <br />
            <Row className="col-10">
              <label htmlFor="price">Product Price</label>
              <br />
              <div className="input-group mb-3">
                <input type="text" className="form-control" name="productPrice" id="price" style={{ borderColor: isProductPriceError ? "red" : "" }} placeholder="$ 1" value={productPrice} onChange={handleProductPrice} required />
                {isProductPriceError && <div className="error">{isProductPriceError}</div>}
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
