const ProductFeed = ({ products }) => {
  return (
    <div>
      <h1>Hello</h1>
      {products.map((product) => (
        <p>{product.title}</p>
      ))}
    </div>
  );
};

export default ProductFeed;
