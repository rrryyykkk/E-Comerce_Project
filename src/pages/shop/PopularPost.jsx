import { Link } from "react-router-dom";

const title = "Most Popular Post";

import imgUrl_1 from "../../assets/images/blog/10.jpg"
import imgUrl_2 from "../../assets/images/blog/11.jpg"
import imgUrl_3 from "../../assets/images/blog/12.jpg"
import imgUrl_4 from "../../assets/images/blog/09.jpg"

const postList = [
  {
    id: 1,
    imgUrl: imgUrl_1,
    imgAlt: "rajibraj91",
    title: "Poor People Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 2,
    imgUrl: imgUrl_2,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 3,
    imgUrl: imgUrl_3,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 4,
    imgUrl: imgUrl_4,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
];
const PopularPost = () => {
  return (
    <div className="widget widget-post ">
      <div className="widget-header">
        <h5 className="title">{title}</h5>
      </div>

      <ul className="widget-wrapper ">
        {postList.map((blog, i) => (
          <li key={i} className="d-flex flex-wrap justify-content-between ">
            <div className="post-thumb ">
              <Link to={`/blog/${blog.id}`}>
                <img src={blog.imgUrl} alt="" />
              </Link>
            </div>
            <div className="post-content">
              <Link to={`/blog/${blog.id}`}>
                <h6>{blog.title}</h6>
              </Link>
              <p>{blog.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPost;
