import { useEffect } from "react";
import Rating from "../../components/Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterByCategory } from "../../redux/slice";

const title = "Our Products";
const menCloting = "men's clothing";
const womenClothing = "women's clothing";

// const ProductData = [
//   {
//     imgUrl: "src/assets/images/categoryTab/01.jpg",
//     cate: "Shoes",
//     title: "Nike Premier X",
//     author: "assets/images/course/author/01.jpg",
//     brand: "Nike",
//     price: "$199.00",
//     id: 1,
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/02.jpg",
//     cate: "Bags",
//     title: "Asthetic Bags",
//     author: "assets/images/course/author/02.jpg",
//     brand: "D&J Bags",
//     price: "$199.00",
//     id: 2,
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/03.jpg",
//     cate: "Phones",
//     title: "iPhone 12",
//     author: "src/assets/images/categoryTab/brand/apple.png",
//     brand: "Apple",
//     price: "$199.00",
//     id: 3,
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/04.jpg",
//     cate: "Bags",
//     title: "Hiking Bag 15 Nh100",
//     author: "assets/images/course/author/04.jpg",
//     brand: "Gucci",
//     price: "$199.00",
//     id: 4,
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/05.jpg",
//     cate: "Shoes",
//     title: "Outdoor Sports Shoes",
//     author: "assets/images/course/author/05.jpg",
//     brand: "Nike",
//     price: "$199.00",
//     id: 5,
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/06.jpg",
//     cate: "Beauty",
//     title: "COSRX Snail Mucin",
//     author: "assets/images/course/author/06.jpg",
//     brand: "Zaara",
//     price: "$199.00",
//     id: 6,
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/07.jpg",
//     cate: "Bags",
//     title: "Look Less Chanel Bag ",
//     author: "assets/images/course/author/01.jpg",
//     brand: "Gucci",
//     price: "$199.00",
//     id: 7,
//   },
//   {
//     imgUrl: "src/assets/images/categoryTab/08.jpg",
//     cate: "Shoes",
//     title: "Casual Sneakers",
//     author: "assets/images/course/author/02.jpg",
//     brand: "Bata",
//     price: "$199.00",
//     id: 8,
//   },
// ];
const CategoryShowCase = () => {
  const dispatch = useDispatch();
  const { filterProduct, activeCategory, loading } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleFilter = (category) => {
    dispatch(filterByCategory(category));
  };

  if (loading === "loading") return <h3>Loading...</h3>;
  return (
    <div className="course-section style-3 padding-tb">
      {/* shapes */}
      <div>
        <img
          className="course-shape one"
          src="/src/assets/images/shape-img/icon/01.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="course-shape two"
          src="/src/assets/images/shape-img/icon/02.jpg"
          alt=""
        />
      </div>
      {/* Main Section */}
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li
                className={activeCategory === "All" ? "active" : ""}
                onClick={() => handleFilter("All")}
              >
                All
              </li>
              <li
                className={activeCategory === "electronics" ? "active" : ""}
                onClick={() => handleFilter("electronics")}
              >
                electronics
              </li>
              <li
                className={activeCategory === "jewelery" ? "active" : ""}
                onClick={() => handleFilter("jewelery")}
              >
                jewelery
              </li>
              <li
                className={activeCategory === "men's clothing" ? "active" : ""}
                onClick={() => handleFilter("men's clothing")}
              >
                {menCloting}
              </li>
              <li
                className={
                  activeCategory === "women's clothing" ? "active" : ""
                }
                onClick={() => handleFilter("women's clothing")}
              >
                {womenClothing}
              </li>
            </ul>
          </div>
        </div>

        {/* Body */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 course-filter">
            {filterProduct.map((product) => (
              <div key={product.id}>
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <div className="card" style={{ height: "13rem" }}>
                        <img src={product.image} alt={product.title} />
                        <div className="course-category">
                          <div className="course-cate">
                            <a href="#">{product.category}</a>
                          </div>
                          <div className="course-review">
                            <Rating />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="course-content">
                      <Link to={`/shop/${product.id}`}>
                        <h6>{product.title}</h6>
                      </Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <Link to={"/"} className="ca-name">
                            {product.brand}
                          </Link>
                        </div>
                        <div className="course-price">${product.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
