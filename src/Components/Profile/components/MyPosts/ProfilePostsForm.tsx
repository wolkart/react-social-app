import {maxLength, required} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {createField, GetFormKeys, Textarea} from "../../../common/Forms/FormsControls";
import React, {FC} from "react";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import {Button, Space} from "antd";
import {StyledProfilePostsForm} from "./styled";

export type NewPostForm = {
    newPost: string
}

const maxLength10 = maxLength(10)

const ProfilePostsForm: FC<InjectedFormProps<NewPostForm>> = (props) => {
    return (
        <StyledProfilePostsForm onSubmit={props.handleSubmit}>
            <Space>
                {createField<GetFormKeys<NewPostForm>>(
                    'Add new post',
                    'newPost',
                    Textarea,
                    [required, maxLength10]
                )}
                <Button size={'large'} type='primary'>Add post</Button>
            </Space>
        </StyledProfilePostsForm>
    )
}

export const ProfilePostFormRedux = reduxForm<NewPostForm>({form: 'newPostForm'})(ProfilePostsForm)