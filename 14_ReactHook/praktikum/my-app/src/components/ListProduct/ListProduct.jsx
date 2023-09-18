function ListProduct(props) {
  const { item, deleteProduct } = props;
  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.image}</td>
      <td>{item.freshness}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={deleteProduct}>
          Delete
        </button>
        <button type="button" className="btn btn-success" >
          Edit
        </button>
      </td>
    </tr>
  );
}

export default ListProduct;
