import './Profile.scss'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
  return <div className="Profile">
    <div>
      <img src="https://miro.medium.com/max/1200/1*OXuG2p9lrGCr4uRFAGuhAQ.png" alt=""/>
    </div>
    <MyPosts/>
  </div>
}