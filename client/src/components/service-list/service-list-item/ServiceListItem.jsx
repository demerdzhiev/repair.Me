import { Link } from "react-router-dom";

export default function ServiceListItem({
    _id,
    name,
    price,
    phone,
    image,
    description,
}) {
    return (
        <div className="allServices">
            <div className="allServices-info">
                <img src={image} />
                <h2>{name}</h2>
                <h3>{price}</h3>
                <h3>{description}</h3>
                <h3>{phone}</h3>
                <Link to={`/services/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}

