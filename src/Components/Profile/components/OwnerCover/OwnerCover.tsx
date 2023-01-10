import wallpaper from '../../../../assets/images/wallpaper.jpeg'
import {FC} from "react";
import {StyledOwnerCover} from "./styled";

export const OwnerCover: FC = () => {
    return (
        <StyledOwnerCover>
            <img src={wallpaper} alt=""/>
        </StyledOwnerCover>
    )
}