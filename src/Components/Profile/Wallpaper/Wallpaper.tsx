import './Wallpaper.scss'
import wallpaper from '../../../assets/images/wallpaper.jpeg'
import {FC} from "react";

export const Wallpaper: FC = () => {
  return (
      <div className="Wallpaper">
        <img src={wallpaper} alt=""/>
      </div>
  )
}