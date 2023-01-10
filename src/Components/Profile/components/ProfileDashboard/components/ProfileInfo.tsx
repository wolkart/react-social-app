import React, {FC} from "react";
import {Space, Typography} from "antd";
import {ContactsType} from "../../../../../types/types";
import {StyledProfileContactLink, StyledProfileInfo} from "../styled";

const {Text, Link} = Typography

type PropsType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ContactsType
}

export const ProfileInfo: FC<PropsType> = (
    {
        aboutMe,
        lookingForAJob,
        lookingForAJobDescription,
        contacts
    }) => {

    return (
        <StyledProfileInfo>
            <Space direction='vertical' size={[0, 4]}>
                <Text children={'Ищу работу:'} strong/>
                <Text type='warning'>{lookingForAJob ? "Да" : "Нет"}</Text>
            </Space>
            <Space direction='vertical' size={[0, 4]}>
                <Text children={'Мои навыки:'} strong/>
                <Text type='warning'>{lookingForAJobDescription}</Text>
            </Space>
            <Space direction='vertical' size={[0, 4]}>
                <Text children={'О себе:'} strong/>
                <Text type='warning'>{aboutMe}</Text>
            </Space>
            <Space direction='vertical' size={[0, 4]} style={{width: '100%'}}>
                <Text children={'Контакты:'} strong/>
                <Space>
                    {Object
                        .keys(contacts)
                        .map(key => {
                            const value = contacts[key as keyof ContactsType]
                            return (
                                value &&
                                <StyledProfileContactLink
                                    key={key}
                                    children={
                                        <Link
                                            href={value}
                                            children={key}
                                            color='#000'
                                        />
                                    }
                                />
                            )
                        })}
                </Space>
            </Space>
        </StyledProfileInfo>
    )
}