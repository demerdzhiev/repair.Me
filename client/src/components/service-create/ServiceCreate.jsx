import { useNavigate } from 'react-router-dom';
import * as serviceApi from '../../api/serviceApi';

export default function ServiceCreate() {
    const navigate = useNavigate();
    
    const createServiceSubmitHandler = async (e) => {
        e.preventDefault();

        const serviceData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await serviceApi.create(serviceData);

            navigate('/services');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createServiceSubmitHandler}>
                <div className="container">
                    <h1>create SERVICE</h1>
                    <label htmlFor="leg-title">title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter service title..." />

                    <label htmlFor="price">price:</label>
                    <input type="text" id="price" name="price" placeholder="Enter service price..." />

                    <label htmlFor="phone-number">phone NUMBER:</label>
                    <input type="text" id="phone-number" name="phoneNumber" placeholder="+359..." />

                    <label htmlFor="service-img">image URL:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="description">description:</label>
                    <textarea name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="Create Service" />
                </div>
            </form>
        </section>
    );
}
