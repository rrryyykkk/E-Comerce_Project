import PropTypes from "prop-types"; // Pastikan impor huruf besar "P"
import { Link } from "react-router-dom";

const PageHeaders = ({ title, curPage }) => {
  return (
    <div className="pageheader-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pageheader-content text-center">
              <h2>{title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {curPage}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PageHeaders.propTypes = {
  title: PropTypes.string.isRequired, // Pastikan menggunakan "PropTypes"
  curPage: PropTypes.string.isRequired,
};

export default PageHeaders;
