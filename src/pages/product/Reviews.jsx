/* eslint-disable react/prop-types */
import { useState } from "react";
import Rating from "../../components/Rating";

const reviwtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];
const Reviews = ({ item }) => {
  const { title, description, image } = item;
  console.log("item :", item);
  console.log("title :", title);
  console.log("description :", description);
  console.log("image :", image);
  const [reviewShow, setReviewShow] = useState(true);

  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Review 4
        </li>

        {/* desc & review content */}
        <div
          className={`review-content ${
            reviewShow ? "review-content-show" : "description-show"
          }`}
        >
          {/* Review */}
          <div className="review-showing">
            <ul className="content lab-ul">
              {ReviewList.map((review, i) => (
                <li key={i} className="bg-transparent">
                  <div className="post-thumb">
                    <img src={review.imgUrl} alt="" />
                  </div>
                  <div className="post-content">
                    <div className="entry-meta">
                      <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* add review filed */}
            <div className="client-review">
              <div className="review-form">
                <div className="review-title">
                  <h5>{reviwtitle}</h5>
                </div>
                <form action="action" className="row">
                  <div className="col-md-4 col-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name *"
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email *"
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="rating">
                      <span className="me-1">Your Ratting</span>
                      <Rating />
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <textarea
                      name="message"
                      id="message"
                      rows={8}
                      placeholder="Type your Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="default-button">
                      <span>Submit Review </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="description">
            <h5 className="title">{title}</h5>
            <div className="post-item">
              <div className="post-thumb">
                <img src={image} alt="" />
              </div>
              <div className="post-content">
                <ul className="lab-ul ">
                  <li className="bg-transparent text-black">{description}</li>
                  <li className="bg-transparent text-black">{description}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Reviews;
