import {Link} from 'react-router-dom';

function buttons() {
    return (
        <div className = "nav-buttons">
            <Link to = "/">
                <button>Home</button>
            </Link>

            <Link to = "/profile">
                <button>Profile</button>
            </Link>

            <Link to = "/settings">
                <button>Settings</button>
            </Link>

            <Link to = "/namecard">
                <button>Name Card</button>
            </Link>
            
        </div>
    )
}

export default buttons;
