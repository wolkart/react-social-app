import {NavBar} from "../NavBar/NavBar";
import {Profile} from "../Profile/Profile";
import './Content.scss'


export const Content = () => {
  return (
      <div className="Content">
          <div className="Content__inner">
            <NavBar/>
            <Profile/>
          </div>
      </div>
  )
}