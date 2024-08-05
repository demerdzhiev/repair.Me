import { useContext, useEffect, useState } from "react";
import * as serviceApi from "../../api/serviceApi";
import authContext from "../../contexts/authContext";
import ServiceListItem from "../service-list/service-list-item/ServiceListItem";

export default function ServicesByOwner() {
  const { userId } = useContext(authContext);
  const [myServices, setMyServices] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await serviceApi.getAllByOwner(userId);
        setMyServices(result);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [userId]);

  return (
    <section id="catalog-page">
      <h1>my SERVICES</h1>
      <div className="catalogue">
        {myServices.map((service) => (
          <ServiceListItem key={service._id} {...service} />
        ))}
      </div>
      {myServices.length === 0 && <h3 className="no-articles">No articles yet</h3>}
    </section>
  );
}
