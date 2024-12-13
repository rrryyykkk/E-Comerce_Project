import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterByCategory } from "../../redux/slice";
import PageHeaders from "../../components/PageHeaders";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Seacrh from "./Seacrh";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const Shop = () => {
  const dispatch = useDispatch();
  const { product, filterProduct, activeCategory, loading } = useSelector(
    (state) => state.product
  );

  // Grid list
  const [gridList, setGridList] = useState(true);

  // Pagination
  const [curPage, setCurPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterByCategory(activeCategory));
    setCurPage(1);
  }, [activeCategory, product, dispatch]);

  // Pagination logic
  const indexOfLastProduct = curPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filterProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurPage(pageNumber);

  // Dynamic show result
  const showResult = `Showing ${indexOfFirstProduct + 1}-${Math.min(
    indexOfLastProduct,
    filterProduct.length
  )} of ${filterProduct.length} Results`;

  // Filter categories
  const menuItems = useMemo(
    () => ["All", ...new Set(product.map((item) => item.category))],
    [product]
  );

  // Handle grid or list view mode
  const handleViewMode = (mode) => {
    setGridList(mode === "grid");
  };

  return (
    <>
      <PageHeaders title="Our Shop Page" curPage="Shop" />
      {/* Main content */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* Layout and title */}
                <div className="shop-title d-flex flew-wrap justify-content-between">
                  <p>{showResult}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => handleViewMode("grid")}>
                      <i className="icofont-ghost"></i>
                    </a>
                  </div>
                </div>

                {/* Products */}
                <div>
                  {loading === "loading" ? (
                    <h3>Loading...</h3>
                  ) : filterProduct.length === 0 ? (
                    <h3>No Product Found. Try selecting another category.</h3>
                  ) : (
                    <ProductCard
                      gridList={gridList}
                      products={currentProducts}
                    />
                  )}
                </div>

                {/* Pagination */}
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={filterProduct.length}
                  paginate={paginate}
                  activePage={curPage}
                />
              </article>
            </div>

            <div className="col-lg-4 col-12">
              <aside>
                <Seacrh products={product} gridList={gridList} />
                <ShopCategory
                  filterItems={(category) =>
                    dispatch(filterByCategory(category))
                  }
                  menuItems={menuItems}
                  selectCategory={activeCategory}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
