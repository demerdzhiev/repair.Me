import { Link } from "react-router-dom";

export default function ServiceListItem({
    _id,
    title,
    price,
    phoneNumber,
    imageUrl,
    description,
}) {
    return (
        <div className="allServices">
            <div className="allServices-info">
                <img src={imageUrl} />
                <h2>{title}</h2>
                <h3>{price}</h3>
                <h3>{description}</h3>
                <h3>{phoneNumber}</h3>
                <Link to={`/services/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
