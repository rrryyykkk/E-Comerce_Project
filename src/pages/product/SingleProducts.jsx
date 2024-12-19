import { useParams } from "react-router-dom";
import PageHeaders from "../../components/PageHeaders";
// swiper
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ProductDisplay from "./ProductDisplay";
import Reviews from "./Reviews";
import PopularPost from "../shop/PopularPost";
import Tags from "../shop/Tags";
import { useSelector } from "react-redux";

const SingleProducts = () => {
  const { product } = useSelector((state) => state.product);

  const { id } = useParams();

  // filter product berdasarkan id
  const result = product.filter((p) => p.id === Number(id));

  return (
    <div>
      <PageHeaders
        title={"Our Shop Single Products"}
        curPage={"Shop / Single Product"}
      />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            {/* left side */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    {/* img */}
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                          >
                            {result.length > 0 ? (
                              result.map((item, i) => (
                                <SwiperSlide key={i}>
                                  <div className="single-thumb">
                                    <img src={item.image} alt="" />
                                  </div>
                                </SwiperSlide>
                              ))
                            ) : (
                              <p>Product not found</p>
                            )}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                    {/* details */}
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div>
                          {result.map((item) => (
                            <ProductDisplay key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* reviews */}
                <div className="review">
                  {result.map((item) => (
                    <Reviews key={item.id} item={item} />
                  ))}
                </div>
              </article>
            </div>
            {/* right side */}
            <div className="col-lg-4 col-12">
              <aside className="ps-lg-4">
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
