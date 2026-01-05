import pfpImage from "../assets/cf38713afe63c6d5b6a4460eef2aadc4.jpg"

    function NameCard() {
        return(
            <div className="card">
            <img src={pfpImage} alt="Profile Photo" className="profile-photo" style={{width: '150px', borderRadius: '50%'}}/>
            <h1 className="name">John Doe</h1>
            <p className="title">Senior Software Engineer</p>

            <div className="contact-info">
                <p><strong>Email:</strong> john.doe@example.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Website:</strong> www.johndoe.com</p>
                <p><strong>Location:</strong> San Francisco, CA</p>
            </div>
            </div>
        )
    }

    export default NameCard