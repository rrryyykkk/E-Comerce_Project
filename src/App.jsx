// App.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slice";
import { Outlet } from "react-router-dom";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  console.log("producth fecth", product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading === "loading") return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <>
      <NavItems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
