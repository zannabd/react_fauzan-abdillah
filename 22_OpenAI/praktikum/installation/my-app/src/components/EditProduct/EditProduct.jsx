import axios from "axios";
import {  useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  // state untk nyimpen data produk yang di edit
  const [editedProduct, setEditedProduct] = useState({
    productName: "",
    productCategory: "",
    productFresh: "brandNew",
    addDescription: "",
    produkPrice: "",
  });

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await axios.get(`https://6524e7f8ea560a22a4ea3f65.mockapi.io/products/${id}`);
  //       const productData = response.data;
  //       setEditedProduct({
  //         productName: productData.name,
  //         productCategory: productData.category,
  //         produkImage: productData.image,
  //         produkFresh: productData.freshness,
  //         addDescription: productData.description,
  //         produkPrice: productData.price
  //       });
  //     } catch (error) {
  //       console.log("Error fetching product", error);
  //     }
  //   };
  //   fetchProduct();
  // }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEditedProduct({ ...editedProduct, imageProduct: file });
  };

  const handleEditProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("productName", editedProduct.productName);
      formData.append("productCategory", editedProduct.productCategory);
      formData.append("productFresh", editedProduct.productFresh);
      formData.append("addDescription", editedProduct.addDescription);
      formData.append("productPrice", editedProduct.productPrice);
      formData.append("imageProduct", editedProduct.imageProduct);

      const response = await axios.put(`https://6524e7f8ea560a22a4ea3f65.mockapi.io/products/${id}`, formData);
      console.log("Produk berhasil di update", response.data);
      navigate("/");
    } catch (error) {
      console.log("Gagal mengubah produk", error);
    }
  };

  return (
    <Container>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Edit Product</h2>
          {/*--------------- FORM Tag -----------------------*/}
          <Form className="mb-3" id="myForm">
            <Row className="col-10">
              <label htmlfor="productName" id="productName" className="form-label">
                Product Name :
              </label>
              <br />
              <input
                aria-label="Product Name"
                type="text"
                className="form-control"
                id="productName"
                name="productName"
                // style={{ borderColor: formErrors.productName ? "red" : "" }}
                value={editedProduct.productName}
                onChange={handleInputChange}
              />
              {/* {formErrors.productName && <div className="error">{formErrors.productName}</div>} */}
              <br />
            </Row>
            <Row className="col-10">
              <label htmlFor="inputProductCategory" className="form-label">
                Product Category :
              </label>
              <br />
              <div className="input-group">
                <select className="form-select" id="productCategory" name="productCategory" aria-label="Example select with button addon" value={editedProduct.productCategory} onChange={handleInputChange}>
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
                <input className="form-control" type="file" id="inputImage" name="imageProduct" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
                {/* {isImageProductError && <Alert>The xxx field must be filled in</Alert>} */}
              </div>
            </Row>
            <Row>
              <p>Product Freshness :</p>
              <div id="productFresh">
                <label>
                  <input type="radio" name="brandNew" value="brandNew" id="brandNew" checked={editedProduct.productFresh === "brandNew"} onChange={handleInputChange} /> Brand New
                </label>
                <br />
                <label>
                  <input type="radio" name="secondHand" value="secondHand" id="secondHand" checked={editedProduct.productFresh === "secondHand"} onChange={handleInputChange} /> Second Hand
                </label>
                <br />
                <label>
                  <input type="radio" name="refurbished" value="refurbished" id="refurbished" checked={editedProduct.productFresh === "refurbished"} onChange={handleInputChange} /> Refurbished
                </label>
                {/* {isProductFreshError && <Alert>The xxx field must be filled in</Alert>} */}
              </div>
            </Row>
            <br />
            <Row className="col-10">
              <label htmlFor="description">Additional Description :</label>
              <br />
              <div className="mb-3">
                <textarea className="form-control" id="description" name="description" rows={3} value={editedProduct.addDescription} onChange={handleInputChange} />
                {/* {formErrors.addDescription && <div className="error">{formErrors.addDescription}</div>} */}
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
                  //   style={{ borderColor: formErrors.productPrice ? "red" : "" }}
                  placeholder="$ 1"
                  value={editedProduct.productPrice}
                  onChange={handleInputChange}
                />
                {/* {formErrors.productPrice && <div className="error">{formErrors.productPrice}</div>} */}
              </div>
            </Row>
            <br />
            <Row className="d-grid gap-2 col-8 mx-auto">
              <button onClick={handleEditProduct} className="btn btn-primary" id="submitButton " type="submit">
                Simpan
              </button>
            </Row>
          </Form>
        </div>
      </div>
    </Container>
  );
}
