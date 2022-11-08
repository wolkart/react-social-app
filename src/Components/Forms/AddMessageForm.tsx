import {createField, GetFormKeys, Textarea} from "../common/Forms/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";
import {reduxForm} from "redux-form";
import React, {FC} from "react";
import {DialogNewMessageForm} from "../Dialogs/Dialogs";
import {InjectedFormProps} from "redux-form/lib/reduxForm";

const maxLength100 = maxLength(100)

const AddMessageForm: FC<InjectedFormProps<DialogNewMessageForm>> = (
    {
        handleSubmit
    }) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField<GetFormKeys<DialogNewMessageForm>>(
                'Enter new message',
                'newMessage',
                Textarea,
                [required, maxLength100]
            )}
            <button
                type="submit"
                className="DialogButton"
            >Add message</button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<DialogNewMessageForm>({form: 'dialogAddMessageForm'})(AddMessageForm)