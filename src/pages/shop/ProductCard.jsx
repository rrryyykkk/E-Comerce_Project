/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Rating from "../../components/Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice";

const ProductCard = ({ gridList, products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, quantity: 1 }));
  };

  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        gridList ? "gridActive" : ""
      }`}
    >
      {products.map((product, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-12">
          <div className="product-item">
            <div className="card" style={{ height: "20rem" }}>
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.image} alt={product.title || "Product"} />
                </div>
                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}>
                    <i className="icofont-eye"></i>
                  </Link>
                  <Link>
                    <i className="icofont-heart"></i>
                  </Link>
                  <Link
                    to={"/cart-page"}
                    onClick={() => handleAddToCart(product)}
                    className="btn-cart-icon"
                  >
                    <i className="icofont-cart-alt"></i>
                  </Link>
                </div>
              </div>
              <div className="product-content">
                <h5>
                  <Link to={`/shop/${product.id}`}>
                    {product.title || "No Title Available"}
                  </Link>
                </h5>
                <p>
                  <Rating
                    rate={product.rating?.rate || 0}
                    count={product.rating?.count || 0}
                  />
                </p>
                <h6>${product.price}</h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
