import { useDispatch } from "react-redux";
import { filterByCategory } from "../../redux/slice";

/* eslint-disable react/prop-types */
const ShopCategory = ({ menuItems, selectCategory }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div>
        <button
          onClick={() => dispatch(filterByCategory("ALL"))}
          className={`m-2 ${selectCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>
        {menuItems.map((val, id) => {
          return (
            <button
              key={id}
              className={`m-2 ${selectCategory === val ? "bg-warning" : ""}`}
              onClick={() => dispatch(filterByCategory(val))}
            >
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
