import "./Header.css"

const Header = () => {
  return (
    <div className="header-container">
        <span className="logo">JobQuest</span>
        <ul className="link-container">
            <li>My Applications</li>
            <li>Saved Jobs</li>
        </ul>
        <div className="header-profile-container">
            <span>Stephen Blevins</span>
            <div className="header-image-container">
                <span>SB</span>
            </div>
        </div>
    </div>
  )
}

export default Header