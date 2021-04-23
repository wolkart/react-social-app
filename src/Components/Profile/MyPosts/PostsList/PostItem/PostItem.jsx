import './PostItem.scss'

export const PostItem = () => {
  return (
      <div className="PostItem">
        <div className="PostItem__ava">
          <img src="https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png" alt=""/>
        </div>
        <a href="" className="PostItem__link">Post item</a>
      </div>
  )
}