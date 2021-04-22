import './Nav.scss'

export const Nav = () => {
  return (
    <nav className="Nav">
      <div className="Nav__item">
        <a href="javascript:void(0);" className="Nav__link">Profile</a>
      </div>
      <div className="Nav__item">
        <a href="javascript:void(0);" className="Nav__link">Messages</a>
      </div>
      <div className="Nav__item">
        <a href="javascript:void(0);" className="Nav__link">News</a>
      </div>
      <div className="Nav__item">
        <a href="javascript:void(0);" className="Nav__link">Music</a>
      </div>
    </nav>
  )
}