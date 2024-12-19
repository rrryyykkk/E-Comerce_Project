import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SelectedCategory from "../../components/SelectedCategory";
import { useSelector } from "react-redux";


const title = (
  <h2>
    Search Your One <span className="text-info">From Thousand</span> of Products
  </h2>
);

const desc = "We have the largest collection of products";

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const { product: products, loading } = useSelector((state) => state.product);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProduct(filtered);
    } else {
      setFilteredProduct([]);
    }
  }, [searchInput, products]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form onSubmit={handleSubmit}>
            <SelectedCategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Your Product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          {loading === "loading" ? (
            <p>Loading...</p>
          ) : (
            <ul className="lab-ul">
              {searchInput && filteredProduct.length > 0
                ? filteredProduct.map((product) => (
                    <li key={product.id}>
                      <Link to={`/shop/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.title}
                          width="50"
                        />
                        <span>{product.title}</span> - ${product.price}
                      </Link>
                    </li>
                  ))
                : searchInput && <li>No Products Found</li>}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
