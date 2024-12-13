/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Seacrh = ({ gridList, products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filterProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search...."
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <i className="icofont-search-1"></i>
        </button>
      </form>

      {/* show search result */}
      <div>
        {searchTerm &&
          filterProducts.map((product) => (
            <Link key={product.id} to={`/shop/${product.id}`}>
              <div className="d-flex gap-3 p-2">
                <div className="pro-thumb h-20">
                  <img
                    src={product.image}
                    alt=""
                    width={60}
                    className="flex-{grow | shrink}"
                  />
                </div>
                <div className="product-content">
                  <p>
                    <Link to={`/shop/${product.id}`}>{product.title}</Link>
                  </p>
                  <h6>${product.price}</h6>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Seacrh;
