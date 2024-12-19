import { Link } from "react-router-dom";

// Import gambar langsung
import img1 from "../../assets/images/category/01.jpg";
import img2 from "../../assets/images/category/02.jpg";
import img3 from "../../assets/images/category/03.jpg";
import img4 from "../../assets/images/category/04.jpg";
import img5 from "../../assets/images/category/05.jpg";
import img6 from "../../assets/images/category/06.jpg";

// Konfigurasi teks
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

// Daftar kategori
const categoryList = [
  {
    imgUrl: img1,
    imgAlt: "DSLR Camera Category",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: img2,
    imgAlt: "Shoes Category",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: img3,
    imgAlt: "Photography Category",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: img4,
    imgAlt: "Formal Dress Category",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: img5,
    imgAlt: "Colorful Bags Category",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: img6,
    imgAlt: "Home Decor Category",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

// Komponen utama
const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        {/* Header section */}
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>

        {/* Kartu kategori */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
            {categoryList.map((val, i) => (
              <div key={i} className="col">
                <Link to={"/shop"} className="category-item">
                  <div className="category-inner">
                    {/* Thumbnail kategori */}
                    <div className="category-thumb">
                      <img src={val.imgUrl} alt={val.imgAlt} />
                    </div>
                    {/* Konten kategori */}
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={val.iconName}></i>
                      </div>
                      <Link to={"/shop"}>
                        <h5 className="text-white">{val.title}</h5>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Tombol di bagian bawah */}
          <div className="text-center mt-5">
            <Link to={"/shop"} className="lab-btn">
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
