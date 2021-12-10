import React from "react";
import usersPreloader from "../../assets/images/Glossy-Preloader.svg";
import './Preloader.scss'

export const Preloader = (props) => {
  return(
    <div className="users-preloader">
      <img src={usersPreloader} alt="Loading"/>
    </div>
  )
}