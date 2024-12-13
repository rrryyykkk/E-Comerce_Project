import { useState } from "react";
import blogList from "../../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeaders from "../../components/PageHeaders";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";
const socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((b) => b.id === Number(id));
  return (
    <div>
      <PageHeaders title="Single Blog Pages" curPage="Blog/ Blog Details" />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justif-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}>
                                          {val.text}
                                        </i>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Nihil laudantium, libero
                                  aspernatur quasi eveniet eaque, quos
                                  reiciendis quo praesentium provident excepturi
                                  pariatur et, veniam sapiente totam in
                                  recusandae eligendi sequi?
                                </p>
                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Placeat omnis maxime
                                    repudiandae modi necessitatibus earum
                                    provident rerum quidem in rem, consequatur
                                    accusamus assumenda ullam ex, saepe debitis
                                    dignissimos molestias explicabo?
                                  </p>
                                  <cite>
                                    <a href="#">...Imas</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Expedita repellendus
                                  voluptas omnis at, quaerat aperiam deserunt
                                  nihil nostrum fuga illo ipsum magni. Ullam
                                  officiis nam quos id sunt quas quo!
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Voluptates, architecto
                                  veniam? Harum delectus sed est, quasi ipsam
                                  sequi? Facilis voluptatibus animi omnis eum.
                                  Sed, obcaecati? Accusantium dignissimos ipsam
                                  ab atque? Sint magnam laboriosam odit! Dolorum
                                  omnis veniam sed fuga deleniti, tenetur
                                  asperiores cum quia magnam explicabo debitis
                                  eaque sit tempore rerum architecto sapiente!
                                  Magnam, quae porro. Iure qui rem possimus.
                                  Dignissimos obcaecati atque eveniet, cumque
                                  repellat, esse doloribus deleniti architecto
                                  vero, accusamus aliquid modi aliquam nemo
                                  magnam. Laudantium rem necessitatibus, iusto
                                  reiciendis quisquam libero, saepe, consequatur
                                  iste quae nesciunt quidem? Aspernatur quos
                                  omnis veritatis unde a sunt alias natus
                                  impedit? Corporis debitis nostrum explicabo
                                  laboriosam voluptatem blanditiis illo
                                  nesciunt, id, similique veniam tempora dolores
                                  suscipit commodi labore, tempore non quas.
                                  Saepe quidem unde neque soluta tenetur.
                                  Quisquam quo quae illum sit hic nemo vel
                                  sapiente earum inventore nulla totam quasi
                                  eius aut, velit, debitis eos consectetur
                                  veritatis? Magni, nisi optio.
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="https://youtu.be/mD6uSGSjgr4?si=mOfQOnCY4azuQSwA"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Debitis magni saepe aut
                                  unde, voluptatibus odit ut, qui rerum hic,
                                  aliquam ipsa fugit quasi aliquid nam autem
                                  velit amet deleniti quibusdam. Commodi facere
                                  repudiandae amet expedita iusto quia libero
                                  animi quo, illum voluptatibus laboriosam culpa
                                  iste repellendus adipisci in ad inventore, cum
                                  hic sapiente enim eligendi officia obcaecati!
                                  Sapiente, accusantium excepturi!
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Bussiness</a>
                                    </li>
                                    <li>
                                      <a href="#">Pesonal </a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left"></i>Previews Blogs
                        </a>
                        <a href="#" className="title">
                          Evistulate Parallel Processes via Technica Sound
                          Models Authoritative
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="prev">
                          <i className="icofont-double-right"></i>Next Blogs
                        </a>
                        <a href="#" className="title">
                          Evistulate Parallel Processes via Technica Sound
                          Models Authoritative
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
