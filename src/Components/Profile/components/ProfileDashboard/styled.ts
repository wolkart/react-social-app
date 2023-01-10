import styled from "styled-components";
import {IStyledProfileAvatar} from "./types";

export const StyledProfileDashboard = styled.div`
  display: flex;
  padding: 20px 30px 30px;
`

export const StyledProfileDashboardAvatar = styled.div<IStyledProfileAvatar>`
  transform: ${({isOwner}) => `translate(0, ${isOwner ? '-100px' : 0})`};
  margin-right: 30px;
`

export const StyledProfiledAvatar = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #61dbfb;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .FileUpload {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: rgba(97, 219, 251, 0.7);
    border-radius: 50%;
    border: 1px solid #61dbfb;
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, 0);
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;

    input {
      display: none;
    }

    &__icon {

    }
  }

  &:hover {
    .FileUpload {
      opacity: 1;
      pointer-events: all;
    }
  }
`

export const StyledProfileInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`

export const StyledProfileContactLink = styled.div`
  a {
    transition: all 0.2s;
    font-weight: bold;
    text-transform: capitalize;

    &:hover {
      color: #61dbfb;
    }
  }
`