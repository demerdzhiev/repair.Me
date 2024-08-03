import { Link } from "react-router-dom";
import Path from "../../../paths";
import { pathToUrl } from "../../../utils/pathUtils";

export default function LatestService({ _id, imageUrl, title }) {
  return (
    <div className="service">
      <div className="image-wrap">
        <img src={imageUrl} />
      </div>
      <div className="service-data">
        <h3>{title}</h3>
        <div className="data-buttons">
          <Link
            to={pathToUrl(Path.ServiceDetails, { serviceId: _id })}
            className="btn details-btn"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
