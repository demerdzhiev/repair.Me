import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">repair ME</Link></h1>
            <nav>
                <Link to="/services">all SERVICES</Link>
                {isAuthenticated && (
                    <div id="user">
                        <Link to="my-services"> my SERVICES</Link>
                        <Link to="/services/create">create SERVICE</Link>
                        <Link to="/logout">logout</Link>
                        <span className='username'>| {username}</span>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">login</Link>
                        <Link to="/register">register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
