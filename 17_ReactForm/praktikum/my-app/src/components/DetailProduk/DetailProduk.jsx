import { Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledDetail = styled.div`
  font-family: "Open Sans", sans-serif;
`;
function DetailProduk(props) {
  const { id } = useParams();
  const { product, setProduct } = props;

  return (
    <StyledDetail>
      <Container>
        <Col>
          <div>
            <h2>Berisi Detail Produk</h2>
            {product.map((item) => (
              <>
                <p>Product ID : {item.id}</p>
                <td>Product Name : {item.name}</td>
                <p>Product Category : {item.category}</p>
                <p>Product Image : {item.image}</p>
                <p>Product Freshness : {item.freshness}</p>
                <p>Product Description : {item.description}</p>
              </>
            ))}
          </div>
        </Col>
      </Container>
    </StyledDetail>
  );
}

export default DetailProduk;
