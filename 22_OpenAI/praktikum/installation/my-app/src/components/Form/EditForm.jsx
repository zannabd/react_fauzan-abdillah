import { useDispatch } from "react-redux";
import { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import { editProduct } from "../../store/productSlice";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

const StyledEditForm = styled.div`
  #isiForm {
    margin: 2rem;
  }
  h2 {
    text-align: center;
  }
`;

function EditForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams;
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    category: "",
    image: "",
    fresh: "brandNew",
    description: "",
    price: "",
  });

  // const handleEditProduct = () => {
  //   dispatch(editProduct({ index, updatedProduct }));
  // };

  // const handleProductChange = (e) => {
  //   const { name, value } = e.target;
  //   setUpdatedProduct((prevProduct) => ({
  //     ...prevProduct,
  //     [name]: value,
  //   }));
  // };
  const handleSaveEdit = () => {
    dispatch(editProduct({ id, updatedProduct }));
    navigate("/")
  };

  return (
    <StyledEditForm>
      <Container>
        <div className="row justify-content-center" id="isiForm">
          <div className="col-md-6">
            <h2>Edit Product</h2>
            <Form className="mb-3" id="myForm">
              <Row className="col-10">
                <label htmlFor="inputProduct" className="form-label">
                  Product name :
                </label>
                <br />
                <input type="text" className="form-control border border-2" id="productName" name="name" value={updatedProduct.name} onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}/>
                <br />
              </Row>
              <Row className="col-10">
                <label htmlFor="inputProductCategory" className="form-label">
                  Product Category :
                </label>
                <br />
                <div className="input-group">
                  <select className="form-select border border-2" id="productCategory" name="productCategory" aria-label="Example select with button addon" value={updatedProduct.category} onChange={(e) => setUpdatedProduct({...updatedProduct, category: e.target.value})}>
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
                  <input className="form-control border border-2" type="file" id="inputImage" name="image" accept=".jpg, .jpeg, .png" value={updatedProduct.image} onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})} />
                  {/* {isImageProductError && <Alert>The xxx field must be filled in</Alert>} */}
                </div>
              </Row>
              <Row>
                <p>Product Freshness :</p>
                <div id="productFresh">
                  <label>
                    <input type="radio" name="productFresh" value="brandNew" id="brandNew" checked={updatedProduct.fresh === "brandNew"} onChange={(e) => setUpdatedProduct({...updatedProduct, fresh: e.target.value})} /> Brand New
                  </label>
                  <br />
                  <label>
                    <input type="radio" name="productFresh" value="secondHand" id="secondHand" checked={updatedProduct.fresh === "secondHand"} onChange={(e) => setUpdatedProduct({...updatedProduct, fresh: e.target.value})} /> Second Hand
                  </label>
                  <br />
                  <label>
                    <input type="radio" name="productFresh" value="refurbished" id="refurbished" checked={updatedProduct.fresh === "refurbished"} onChange={(e) => setUpdatedProduct({...updatedProduct, fresh: e.target.value})} /> Refurbished
                  </label>
                  {/* {isProductFreshError && <Alert>The xxx field must be filled in</Alert>} */}
                </div>
              </Row>
              <br />
              <Row className="col-10">
                <label htmlFor="description">Additional Description :</label>
                <br />
                <div className="mb-3">
                  <textarea className="form-control border border-2" id="description" name="addDescription" rows={3} value={updatedProduct.description} onChange={(e) => setUpdatedProduct({...updatedProduct, description: e.target.value})} />
                  {/* {formErrors.addDescription && <div className="error">{formErrors.addDescription}</div>} */}
                </div>
              </Row>
              <br />
              <Row className="col-10">
                <label htmlFor="price">Product Price</label>
                <br />
                <div className="input-group mb-3">
                  <input type="text" className="form-control border border-2" name="productPrice" id="price" placeholder="$ 1" value={updatedProduct.price} onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})} required />
                  {/* {formErrors.productPrice && <div className="error">{formErrors.productPrice}</div>} */}
                </div>
              </Row>
              <br />
              <Row className="d-grid gap-2 col-8 mx-auto">
                <button onClick={handleSaveEdit} className="btn btn-primary" id="submitButton " type="submit">
                  Simpan
                </button>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    </StyledEditForm>
  );
}

export default EditForm;
