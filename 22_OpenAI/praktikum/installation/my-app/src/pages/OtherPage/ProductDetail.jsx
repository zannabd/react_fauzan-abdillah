import { Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledDetail = styled.div`
  font-family: "Open Sans", sans-serif;
`;
function ProductDetail({ product }) {
  const { id } = useParams();

  const produk = product.find(produk => produk.id === id);

  // useEffect(() => {

  // }, [id]);

  return (
    <StyledDetail>
      <Container>
        <Col>
          <div>
            <h2>Berisi Detail Produk</h2>
            {/* {product.map((item) => ( */}
            <div>
              <p>Product ID : {produk.id}</p>
              <p>Product Name : {produk.name}</p>
              <p>Product Category : {produk.category}</p>
              <p>Product Image : {produk.image}</p>
              <p>Product Freshness : {produk.freshness}</p>
              <p>Product Description : {produk.description}</p>
            </div>
            {/* ))} */}
          </div>
        </Col>
      </Container>
    </StyledDetail>
  );
}

export default ProductDetail;
