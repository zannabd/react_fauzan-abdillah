import Table from "react-bootstrap/Table";

function Tabel(props) {
  const { product } = props;

  return (
    <>
      <div>
        <h2 className="text">List Product</h2>
        <Table className="table table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Image of Product</th>
              <th>Product Freshness</th>
              <th>Additional Description</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.image}</td>
                <td>{item.freshness}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* <div>
        <div>
          <input type="text" name="name" id="name" placeholder="Search By Product Name" />
        </div>
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked="" />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            Deletion
          </label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Search
          </label>
        </div>
      </div> */}
    </>
  );
}

export default Tabel;
