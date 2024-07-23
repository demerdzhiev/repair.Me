import { useNavigate } from 'react-router-dom';

import * as serviceService from '../../services/serviceService';

export default function ServiceCreate() {
    const navigate = useNavigate();
    
    const createServiceSubmitHandler = async (e) => {
        e.preventDefault();

        const serviceData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await serviceService.create(serviceData);

            navigate('/service');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createServiceSubmitHandler}>
                <div className="container">
                    <h1>Create Service</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter service title..." />

                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" placeholder="Enter service price..." />

                    <label htmlFor="phone-number">MaxLevel:</label>
                    <input type="text" id="phone-number" name="phoneNumber" placeholder="+359..." />

                    <label htmlFor="service-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="Create Service" />
                </div>
            </form>
        </section>
    );
}
