function NameCard() {
    return(
        <div className="card">
        <img src="src\images\cf38713afe63c6d5b6a4460eef2aadc4.jpg" alt="Profile Photo" class="profile-photo"/>
        <h1 class="name">John Doe</h1>
        <p class="title">Senior Software Engineer</p>

        <div class="contact-info">
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Website:</strong> www.johndoe.com</p>
            <p><strong>Location:</strong> San Francisco, CA</p>
        </div>
        </div>
    )
}

export default NameCard