import { useEffect, useState } from 'react';

import * as serviceService from '../../services/serviceService'
import ServiceListItem from './service-list-item/ServiceListItem';

export default function ServiceList() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        serviceService.getAll()
            .then(result => setServices(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Services</h1>

            {services.map(service => (
                <ServiceListItem key={service._id} {...service} />
            ))}

            {services.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}