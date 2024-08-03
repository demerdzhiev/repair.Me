import { useEffect, useState } from "react";
import LatestService from "./latest-service/LatestService";
import * as serviceApi from "../../api/serviceApi";

export default function Home() {
  const [latestServices, setLatestServices] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await serviceApi.getLatest();
      setLatestServices(result);
    })();
  }, []);

  return (
    <section id="hero-page">
      <div className="welcome-message">
        <h2>welcome to repair ME</h2>
      </div>

      {!latestServices.length ? (
        <h1 className="no-articles"> no services YET</h1>
      ) : (
        <h1 className="no-articles">latest SERVICES</h1>
      )}

      {latestServices.length > 0 && (
    <div id="home-page">
        {latestServices.map((service) => (
            <LatestService key={service._id} {...service} />
        ))}
    </div>
)}
    </section>
  );
}
