import './Wallpaper.scss'
import wallpaper from '../../../assets/images/wallpaper.jpeg'

export const Wallpaper = () => {
  return (
      <div className="Wallpaper">
        <img src={wallpaper} alt=""/>
      </div>
  )
}