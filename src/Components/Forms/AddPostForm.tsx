import {maxLength, required} from "../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {createField, GetFormKeys, Textarea} from "../common/Forms/FormsControls";
import React, {FC} from "react";
import {InjectedFormProps} from "redux-form/lib/reduxForm";

export type NewPostForm = {
    newPost: string
}

const maxLength10 = maxLength(10)

const AddPostForm: FC<InjectedFormProps<NewPostForm>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<GetFormKeys<NewPostForm>>(
                'Add new post',
                'newPost',
                Textarea,
                [required, maxLength10]
            )}
            <button>Add post</button>
        </form>
    )
}

export const AddPostFormRedux = reduxForm<NewPostForm>({form: 'newPostForm'})(AddPostForm)