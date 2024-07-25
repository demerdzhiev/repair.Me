import { useNavigate, useParams } from 'react-router-dom';

import * as serviceApi from '../../api/serviceApi';
import { useEffect, useState } from 'react';

export default function ServiceEdit() {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const [service, setService] = useState({
        title: '',
        price: '',
        phone: '',
        imageUrl: '',
        description: '',
    });

    useEffect(() => {
        serviceApi.getOne(serviceId)
            .then(result => {
                setService(result);
            });
    }, [serviceId]);

    const editServiceSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await serviceApi.edit(serviceId, values);

            navigate('/services');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setService(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editServiceSubmitHandler}>
                <div className="container">
                    <h1>Create Service</h1>
                    <label htmlFor="leg-title">Service title:</label>
                    <input type="text" id="title" name="title" value={service.title} onChange={onChange} placeholder="Enter service title..." />

                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" value={service.price} onChange={onChange} placeholder="Enter service category..." />

                    <label htmlFor="phone">Phone number:</label>
                    <input type="text" id="phone" name="phone" value={service.phone} onChange={onChange} placeholder="Enter phone number" />

                    <label htmlFor="service-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={service.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" value={service.description} onChange={onChange} id="description"></textarea>
                    <input className="btn submit" type="submit" value="Edit Service" />
                </div>
            </form>
        </section>
    );
}
