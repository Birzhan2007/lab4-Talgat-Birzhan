function ProductCard({ product, onAdd, featured }) {
  const className = featured ? 'product product--featured' : 'product';

  return (
    <article className={className}>
      {featured && <span className="product__badge">Товар недели</span>}
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} тг</p>
      <button onClick={() => onAdd(product)}>🛒 В корзину</button>
    </article>
  );
}

export default ProductCard;
